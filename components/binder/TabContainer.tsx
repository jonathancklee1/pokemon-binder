"use client";
import { BinderType } from "@/lib/stores/BindersStore";
import { useContext, useState } from "react";
import BinderContent from "./BinderContent";
import {
  useBindersHydrated,
  useBindersStore,
} from "@/lib/stores/BinderStoreProvider";
import { Plus } from "lucide-react";
import PageNumberContext from "@/lib/contexts/PageNumberContext";
import ActiveTabContext from "@/lib/contexts/ActiveTabContext";

export default function TabContainer({
  binderArray,
}: {
  binderArray: BinderType[];
}) {
  const { binders, addCollection } = useBindersStore((state) => state);
  const { setCurrentPage } = useContext(PageNumberContext);
  const [activeTab, setActiveTab] = useState<string>();
  const selectedTab = activeTab ?? binders[0]?.id;
  const hydrated = useBindersHydrated();

  function handleAddCollection() {
    setActiveTab(addCollection());
    setCurrentPage(0);
  }

  return (
    <div>
      <div
        role="tablist"
        className="tabs-lift tabs flex-nowrap space-x-1.5 overflow-x-auto"
      >
        {binderArray.map((binder) => (
          <button
            key={binder?.id}
            role="tab"
            aria-selected={binder?.id === selectedTab}
            className={`tab rounded-t-xl p-2 font-bold whitespace-nowrap ${
              binder?.id === selectedTab
                ? "tab-active border-secondary border-2 border-b-0"
                : ""
            }`}
            onClick={() => setActiveTab(binder?.id)}
          >
            {hydrated ? (
              <div className="flex items-center gap-2">
                <div
                  className="size-3 rounded-full"
                  style={{
                    backgroundColor: binder.colour,
                  }}
                ></div>
                <span>{binder?.name}</span>
              </div>
            ) : (
              <span className="skeleton h-4 w-24" />
            )}
          </button>
        ))}
        {binders.length > 0 && (
          <button
            role="tab"
            className="tab hover:bg-secondary/10 hover:text-secondary rounded-t-xl p-2 font-bold whitespace-nowrap"
            onClick={() => handleAddCollection()}
          >
            {<Plus className="size-5" />}
          </button>
        )}
      </div>
      <div
        role="tabpanel"
        className="border-base-300 bg-base-100 rounded-box rounded-ss-none border p-3"
      >
        <ActiveTabContext.Provider
          value={{ activeTab: selectedTab ?? "", setActiveTab: setActiveTab }}
        >
          <BinderContent />
        </ActiveTabContext.Provider>
      </div>
    </div>
  );
}

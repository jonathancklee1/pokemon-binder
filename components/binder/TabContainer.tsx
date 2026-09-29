"use client";
import { BinderType } from "@/lib/stores/BindersStore";
import { useState } from "react";
import BinderContent from "./BinderContent";
import { useBindersStore } from "@/lib/stores/BinderStoreProvider";

export default function TabContainer({
  binderArray,
}: {
  binderArray: BinderType[];
}) {
  const { binders } = useBindersStore((state) => state);
  const [activeTab, setActiveTab] = useState(binders[0].id);
  return (
    <div>
      <div
        role="tablist"
        className="tabs-lift tabs flex-nowrap space-x-1.5 overflow-x-auto"
      >
        {binderArray.map((binder) => (
          <button
            key={binder.id}
            role="tab"
            aria-selected={binder.id === activeTab}
            className={`tab rounded-t-xl p-2 font-bold whitespace-nowrap ${
              binder.id === activeTab
                ? "tab-active border-secondary border-2 border-b-0"
                : ""
            }`}
            onClick={() => setActiveTab(binder.id)}
          >
            {binder.name}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        className="border-base-300 bg-base-100 rounded-box rounded-ss-none border p-3"
      >
        <BinderContent activeTab={activeTab} />
      </div>
    </div>
  );
}

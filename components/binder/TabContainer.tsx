"use client";
import { type CSSProperties, useState } from "react";
import BinderContent from "./BinderContent";
import {
  useBindersHydrated,
  useBindersStore,
} from "@/lib/stores/BinderStoreProvider";
import { Plus } from "lucide-react";
import ActiveTabContext from "@/lib/contexts/ActiveTabContext";

export default function TabContainer() {
  const { binders, addCollection } = useBindersStore((state) => state);
  const [activeTab, setActiveTab] = useState<string>();
  const selectedTab = activeTab ?? binders[0]?.id;
  const selectedBinder = binders.find((binder) => binder.id === selectedTab);
  const hydrated = useBindersHydrated();

  function handleAddCollection() {
    setActiveTab(addCollection());
  }

  return (
    <div
      style={
        {
          "--binder": selectedBinder?.colour ?? "var(--secondary)",
        } as CSSProperties
      }
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Binders
          </h1>
          <p className="text-muted mt-1 text-sm">
            {hydrated ? (
              `${binders.length} ${binders.length === 1 ? "binder" : "binders"}`
            ) : (
              <span className="skeleton inline-block h-3 w-16" />
            )}
          </p>
        </div>
        {binders.length > 0 && (
          <button
            className="bg-secondary text-primary-text flex h-9 items-center gap-1.5 rounded-lg px-3.5 text-sm font-semibold transition-colors hover:bg-yellow-300"
            onClick={handleAddCollection}
          >
            <Plus className="size-4" />
            New binder
          </button>
        )}
      </div>

      {binders.length > 0 && (
        <div
          role="tablist"
          aria-label="Binders"
          className="border-line mb-5 flex gap-1 overflow-x-auto border-b"
        >
          {binders.map((binder) => {
            const selected = binder.id === selectedTab;
            return (
              <button
                key={binder.id}
                role="tab"
                aria-selected={selected}
                className={`relative flex shrink-0 items-center gap-2 px-3 pt-2 pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  selected ? "text-white" : "text-muted hover:text-white"
                }`}
                onClick={() => setActiveTab(binder.id)}
              >
                <span
                  className="size-2.5 rounded-full ring-1 ring-white/20"
                  style={{ backgroundColor: binder.colour }}
                />
                {binder.name}

                {selected && (
                  <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-[color-mix(in_oklab,var(--binder),white_25%)]" />
                )}
              </button>
            );
          })}
        </div>
      )}

      <div role="tabpanel">
        <ActiveTabContext.Provider
          value={{ activeTab: selectedTab ?? "", setActiveTab: setActiveTab }}
        >
          <BinderContent />
        </ActiveTabContext.Provider>
      </div>
    </div>
  );
}

"use client";
import { useContext, useState } from "react";
import BinderFolder from "./BinderFolder";
import BinderMenu from "./BinderMenu";
import PageNumberContext from "@/lib/contexts/PageNumberContext";
import { useBindersStore } from "@/lib/stores/BinderStoreProvider";
import { BookOpen, Plus } from "lucide-react";
import ActiveTabContext from "@/lib/contexts/ActiveTabContext";

function BinderContent() {
  const [currentPage, setCurrentPage] = useState(0);
  const { binders, addCollection } = useBindersStore((state) => state);
  const { setActiveTab } = useContext(ActiveTabContext);
  function handleAddCollection() {
    setActiveTab(addCollection());
    setCurrentPage(0);
  }
  if (binders.length === 0) {
    return (
      <div className="border-line flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed px-6 py-20 text-center">
        <div className="bg-surface text-secondary grid size-12 place-items-center rounded-2xl">
          <BookOpen className="size-6" />
        </div>
        <p className="text-lg font-semibold">Create a binder to get started!</p>
        <button
          className="bg-secondary text-primary-text flex h-10 items-center gap-1.5 rounded-lg px-4 text-sm font-semibold transition-colors hover:bg-yellow-300"
          onClick={handleAddCollection}
        >
          <Plus className="size-4" />
          New binder
        </button>
      </div>
    );
  }
  return (
    <PageNumberContext.Provider
      value={{ currentPage: currentPage, setCurrentPage: setCurrentPage }}
    >
      <BinderMenu />
      {/* Stage: a soft floor light in the active binder's cover colour */}
      <div className="border-line mt-4 rounded-3xl border bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,color-mix(in_oklab,var(--binder)_16%,transparent),transparent)] p-2 md:p-6">
        <BinderFolder />
      </div>
    </PageNumberContext.Provider>
  );
}

export default BinderContent;

"use client";
import { useContext, useState } from "react";
import BinderFolder from "./BinderFolder";
import BinderMenu from "./BinderMenu";
import PageNumberContext from "@/lib/contexts/PageNumberContext";
import { useBindersStore } from "@/lib/stores/BinderStoreProvider";
import { Plus } from "lucide-react";
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
      <div className="flex h-40 w-full flex-col items-center justify-center gap-4">
        <p className="text-center text-lg font-bold">
          Create a binder to get started!
        </p>
        <button
          className="btn hover:bg-secondary/10 hover:text-secondary h-14 w-14 rounded-full p-2 font-bold whitespace-nowrap"
          onClick={() => handleAddCollection()}
        >
          {<Plus className="size-7" />}
        </button>
      </div>
    );
  }
  return (
    <div>
      <PageNumberContext.Provider
        value={{ currentPage: currentPage, setCurrentPage: setCurrentPage }}
      >
        <BinderMenu />
        <BinderFolder />
      </PageNumberContext.Provider>
    </div>
  );
}

export default BinderContent;

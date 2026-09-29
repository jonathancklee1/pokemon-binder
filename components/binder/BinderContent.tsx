"use client";
import { useState } from "react";
import BinderFolder from "./BinderFolder";
import BinderMenu from "./BinderMenu";
import PageNumberContext from "@/lib/contexts/PageNumberContext";

function BinderContent({ activeTab }: { activeTab: string }) {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      <PageNumberContext.Provider
        value={{ currentPage: currentPage, setCurrentPage: setCurrentPage }}
      >
        <BinderMenu activeTab={activeTab} />
        <BinderFolder activeTab={activeTab} />
      </PageNumberContext.Provider>
    </div>
  );
}

export default BinderContent;

"use client";
import { useState } from "react";
import BinderFolder from "./BinderFolder";
import BinderMenu from "./BinderMenu";
import PageNumberContext from "@/lib/contexts/PageNumberContext";

function BinderContent({ activeTab }: { activeTab: string }) {
  const [pocketNumber, setPocketNumber] = useState<4 | 9 | 12>(4);
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

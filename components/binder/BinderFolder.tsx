"use client";
import { useEffect, useState } from "react";
import BinderCarouselMobile from "./BinderCarouselMobile";
import { CARD_LIST } from "@/lib/constants";
import BinderDesktop from "./BinderDesktop";
import BinderFolderSkeleton from "./BinderFolderSkeleton";
import { useBindersHydrated } from "@/lib/stores/BinderStoreProvider";

function BinderFolder({ activeTab }: { activeTab: string }) {
  const hydrated = useBindersHydrated();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!hydrated) return <BinderFolderSkeleton />;

  return (
    <div>
      {isMobile ? (
        <BinderCarouselMobile cardList={CARD_LIST} activeTab={activeTab} />
      ) : (
        <BinderDesktop cardList={CARD_LIST} activeTab={activeTab} />
      )}
    </div>
  );
}

export default BinderFolder;

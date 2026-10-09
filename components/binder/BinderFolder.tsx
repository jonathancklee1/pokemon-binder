"use client";
import { useEffect, useState } from "react";
import BinderCarouselMobile from "./BinderCarouselMobile";
import BinderDesktop from "./BinderDesktop";
import BinderFolderSkeleton from "./BinderFolderSkeleton";
import { useBindersHydrated } from "@/lib/stores/BinderStoreProvider";
import { useActiveBinder } from "@/lib/hooks/useActiveBinder";

function BinderFolder() {
  const hydrated = useBindersHydrated();
  const [isMobile, setIsMobile] = useState(false);
  const { activeBinder } = useActiveBinder();
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
        <BinderCarouselMobile cardList={activeBinder?.cardList || []} />
      ) : (
        <BinderDesktop cardList={activeBinder?.cardList || []} />
      )}
    </div>
  );
}

export default BinderFolder;

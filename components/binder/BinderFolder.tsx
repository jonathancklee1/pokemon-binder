"use client";
import { useEffect, useState } from "react";
import BinderCarouselMobile from "./BinderCarouselMobile";
import { CARD_LIST } from "@/lib/constants";
import BinderDesktop from "./BinderDesktop";

function BinderFolder({ activeTab }: { activeTab: string }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

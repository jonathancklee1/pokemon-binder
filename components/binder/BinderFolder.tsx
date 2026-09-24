"use client";
import { useEffect, useState } from "react";
import BinderPage from "./BinderPage";
import BinderCarouselMobile from "./BinderCarouselMobile";
import { CARD_LIST } from "@/lib/constants";

function BinderFolder() {
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {isMobile ? (
        <BinderCarouselMobile cardList={CARD_LIST} pocketSize={4} />
      ) : (
        <>
          <BinderPage />
          <BinderPage />
        </>
      )}
    </div>
  );
}

export default BinderFolder;

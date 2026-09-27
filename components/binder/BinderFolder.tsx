"use client";
import { useEffect, useState } from "react";
import BinderCarouselMobile from "./BinderCarouselMobile";
import { CARD_LIST } from "@/lib/constants";
import BinderDesktop from "./BinderDesktop";

function BinderFolder({ pocketSize }: { pocketSize: 4 | 9 | 12 }) {
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
        <BinderCarouselMobile cardList={CARD_LIST} pocketSize={pocketSize} />
      ) : (
        <BinderDesktop cardList={CARD_LIST} pocketSize={pocketSize} />
      )}
    </div>
  );
}

export default BinderFolder;

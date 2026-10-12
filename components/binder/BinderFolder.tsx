"use client";
import { useEffect, useState } from "react";
import BinderCarouselMobile from "./BinderCarouselMobile";
import BinderDesktop from "./BinderDesktop";
import BinderFolderSkeleton from "./BinderFolderSkeleton";
import { useBindersHydrated } from "@/lib/stores/BinderStoreProvider";
import { useActiveBinder } from "@/lib/hooks/useActiveBinder";
import SetCardDialog from "@/components/set-list/SetCardDialog";
import CardModalContext from "@/lib/contexts/CardModalContext";
import type { CardBriefType } from "@/lib/types";

function BinderFolder() {
  const hydrated = useBindersHydrated();
  const [isMobile, setIsMobile] = useState(false);
  const { activeBinder } = useActiveBinder();
  const [selectedCard, setSelectedCard] = useState<CardBriefType | null>(null);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openCardModal(card: CardBriefType) {
    setSelectedCard(card);
    const modal = document.getElementById("card-modal") as HTMLDialogElement;
    modal.showModal();
  }

  if (!hydrated) return <BinderFolderSkeleton />;

  return (
    <CardModalContext.Provider value={{ openCardModal }}>
      {isMobile ? (
        <BinderCarouselMobile cardList={activeBinder?.cardList || []} />
      ) : (
        <BinderDesktop cardList={activeBinder?.cardList || []} />
      )}
      <SetCardDialog cardData={selectedCard} />
    </CardModalContext.Provider>
  );
}

export default BinderFolder;

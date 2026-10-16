"use client";
import { useEffect, useState } from "react";
import BinderCarouselMobile from "./BinderCarouselMobile";
import BinderDesktop from "./BinderDesktop";
import BinderFolderSkeleton from "./BinderFolderSkeleton";
import { useBindersHydrated } from "@/lib/stores/BinderStoreProvider";
import { useActiveBinder } from "@/lib/hooks/useActiveBinder";
import SetCardDialog from "@/components/set-list/SetCardDialog";
import DeleteCardDialog from "./DeleteCardDialog";
import CardModalContext from "@/lib/contexts/CardModalContext";
import type { CardBriefType } from "@/lib/types";

function BinderFolder() {
  const hydrated = useBindersHydrated();
  const [isMobile, setIsMobile] = useState(false);
  const { activeBinder } = useActiveBinder();
  const [selectedCard, setSelectedCard] = useState<CardBriefType | null>(null);
  const [deleteSlot, setDeleteSlot] = useState<number | null>(null);
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

  function openDeleteModal(slot: number) {
    setDeleteSlot(slot);
    const modal = document.getElementById(
      "delete-card-modal",
    ) as HTMLDialogElement;
    modal.showModal();
  }

  if (!hydrated) return <BinderFolderSkeleton />;

  return (
    <CardModalContext.Provider value={{ openCardModal, openDeleteModal }}>
      {isMobile ? (
        <BinderCarouselMobile cardList={activeBinder?.cardList || []} />
      ) : (
        <BinderDesktop cardList={activeBinder?.cardList || []} />
      )}
      <SetCardDialog cardData={selectedCard} />
      <DeleteCardDialog slot={deleteSlot} />
    </CardModalContext.Provider>
  );
}

export default BinderFolder;

"use client";

import CardFilterAndGrid from "@/components/set-list/CardFilterAndGrid";
import SetCardDialog from "@/components/set-list/SetCardDialog";
import type { CardBriefType, SetDetailType } from "@/lib/types";
import { useState } from "react";

function CardGridAndModal({ setData }: { setData: SetDetailType }) {
  const [selectedCard, setSelectedCard] = useState<CardBriefType | null>(null);
  return (
    <>
      <CardFilterAndGrid
        cards={setData.cards}
        handleCardClick={setSelectedCard}
      />
      <SetCardDialog cardData={selectedCard} />
    </>
  );
}

export default CardGridAndModal;

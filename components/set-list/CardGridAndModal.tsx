"use client";

import SearchCard from "@/components/SearchCard";
import SetCardDialog from "@/components/set-list/SetCardDialog";
import SetGrid from "@/components/set-list/SetGrid";
import type { CardBriefType, SetDetailType } from "@/lib/types";
import { useState } from "react";

function CardGridAndModal({ setData }: { setData: SetDetailType }) {
  const [selectedCard, setSelectedCard] = useState<CardBriefType | null>(null);
  return (
    <>
      <SetGrid>
        {setData.cards.map((card: CardBriefType) => (
          <SearchCard
            key={card.id}
            cardData={card}
            handleClick={() => setSelectedCard(card)}
          />
        ))}
      </SetGrid>
      <SetCardDialog cardData={selectedCard} />
    </>
  );
}

export default CardGridAndModal;

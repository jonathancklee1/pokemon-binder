"use client";

import SearchCard from "@/components/SearchCard";
import SetFilter from "@/components/set-list/SetFilter";
import SetGrid from "@/components/set-list/SetGrid";
import type { CardBriefType } from "@/lib/types";
import { useState } from "react";

/** Search filter and grid for the cards in a set. */
function CardFilterAndGrid({
  cards,
  handleCardClick,
}: {
  cards: CardBriefType[];
  handleCardClick: (card: CardBriefType) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <>
      <div className="mb-4 flex w-full flex-col gap-4 md:flex-row">
        <SetFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {filteredCards.length === 0 && (
        <div className="flex w-full items-center justify-center rounded-lg p-4 text-center text-gray-500">
          No cards found.
        </div>
      )}
      <SetGrid>
        {filteredCards.map((card) => (
          <SearchCard
            key={card.id}
            cardData={card}
            handleClick={() => handleCardClick(card)}
          />
        ))}
      </SetGrid>
    </>
  );
}

export default CardFilterAndGrid;

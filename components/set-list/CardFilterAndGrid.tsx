"use client";

import PokemonSetCard from "@/components/PokemonSetCard";
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
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SetFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search cards"
        />
        <p className="text-muted text-sm tabular-nums">
          {filteredCards.length} of {cards.length} cards
        </p>
      </div>
      {filteredCards.length === 0 && (
        <div className="border-line text-muted flex w-full items-center justify-center rounded-2xl border border-dashed px-4 py-16 text-center">
          No cards found.
        </div>
      )}
      <SetGrid>
        {filteredCards.map((card) => (
          <PokemonSetCard
            key={card.id}
            cardData={card}
            handleCardClick={handleCardClick}
          />
        ))}
      </SetGrid>
    </>
  );
}

export default CardFilterAndGrid;

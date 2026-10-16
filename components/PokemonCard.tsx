"use client";
import CardModalContext from "@/lib/contexts/CardModalContext";
import { CardBriefType } from "@/lib/types";
import { Trash } from "lucide-react";
import Image from "next/image";
import { MouseEvent, useContext } from "react";

function PokemonCard({
  cardData,
  slot,
}: {
  cardData: CardBriefType | null;
  slot: number;
}) {
  const { openCardModal, openDeleteModal } = useContext(CardModalContext);
  if (!cardData) {
    return (
      <div className="card sleeve grid aspect-110/154 place-items-center rounded-none border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md"></div>
    );
  }
  function handleTrashClick(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    openDeleteModal(slot);
  }
  return (
    <div
      className="card sleeve group relative cursor-pointer rounded-none border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
      onClick={() => openCardModal(cardData)}
    >
      <button
        className="border-line absolute top-2 right-2 z-11 hidden size-9 place-items-center rounded-lg border bg-red-500 text-white transition-all group-hover:grid hover:border-red-500/70 hover:bg-red-500/60 hover:text-white/80"
        onClick={handleTrashClick}
      >
        <Trash />
      </button>
      <figure className="h-full w-full">
        {cardData.image && (
          <Image
            src={`${cardData.image}/high.webp`}
            alt="Pokemon"
            width={200}
            height={200}
            className="h-full w-full rounded-lg"
          />
        )}
      </figure>
    </div>
  );
}

export default PokemonCard;

"use client";
import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { CardBriefType } from "@/lib/types";
import { Plus } from "lucide-react";
function PokemonSetCard({
  cardData,
  handleCardClick,
}: {
  cardData: CardBriefType;
  handleCardClick: (card: CardBriefType) => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="group border-line bg-surface hover:bg-raised relative flex cursor-pointer flex-col rounded-2xl border p-2.5 transition-colors hover:border-white/15">
      {/* Click is handled here because the hover zones sit on top of the image */}
      <div
        className="hover-3d z-1 w-full"
        onClick={() => {
          if (!cardData.image) return;
          const modal = document.getElementById(
            "card-modal",
          ) as HTMLDialogElement;
          modal.showModal();
          handleCardClick(cardData);
        }}
      >
        <figure
          className={`relative w-full cursor-pointer ${imageLoaded || (!cardData.image && !imageLoaded) ? "" : "skeleton"}`}
        >
          {cardData.image ? (
            <Image
              src={`${cardData.image}/${isMobile ? "low" : "high"}.webp`}
              alt={cardData.name}
              width={245}
              height={337}
              onLoad={() => setImageLoaded(true)}
              className={`w-full rounded-lg transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
          ) : (
            <div className="inset-0 flex aspect-245/337 w-full items-center justify-center text-gray-500">
              <span className="">Image Unavailable</span>
            </div>
          )}

          {!imageLoaded && cardData.image && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <span className="loading loading-spinner loading-xs"></span>
            </div>
          )}
        </figure>
        {/* 8 empty divs required by daisyUI hover-3d as hover zones */}
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} />
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 px-1.5 pt-3 pb-1">
        <div className="min-w-0">
          <h2 className="truncate text-[15px] leading-snug font-semibold">
            {cardData.name}
          </h2>
          <p className="text-muted mt-0.5 text-sm tabular-nums">
            #{cardData.localId}
          </p>
        </div>
        <button
          aria-label={`Add ${cardData.name} to a binder`}
          className="border-line text-secondary hover:bg-secondary hover:text-primary-text grid size-9 shrink-0 place-items-center rounded-lg border transition-colors"
          onClick={() => {
            if (!cardData) return;
            const modal = document.getElementById(
              "add-card-modal",
            ) as HTMLDialogElement;
            modal.showModal();
            handleCardClick(cardData);
          }}
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}

export default PokemonSetCard;

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
    <div className="card group relative cursor-pointer rounded-none border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
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
      <div className="card-body flex flex-row items-center justify-between gap-1 overflow-hidden p-2 pt-4">
        <h2 className="card-title line-clamp-1 overflow-hidden text-base font-bold text-ellipsis">
          {cardData.name}
        </h2>
        <button
          className="btn btn-circle border-secondary hover:bg-secondary text-secondary hover:text-primary-text"
          onClick={() => {
            if (!cardData) return;
            const modal = document.getElementById(
              "add-card-modal",
            ) as HTMLDialogElement;
            modal.showModal();
            handleCardClick(cardData);
          }}
        >
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default PokemonSetCard;

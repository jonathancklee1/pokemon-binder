"use client";
import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { CardBriefType } from "@/lib/types";

function SearchCard({
  cardData,
  handleClick,
}: {
  cardData: CardBriefType;
  handleClick: () => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();
  return (
    <div
      className="card group relative cursor-pointer rounded-none border border-white/20 bg-white/10 shadow-lg backdrop-blur-md"
      onClick={() => {
        const modal = document.getElementById(
          "card-modal",
        ) as HTMLDialogElement;
        modal.showModal();
        handleClick();
      }}
    >
      <div className="hover-3d z-1 w-full">
        <figure
          className={`relative w-full cursor-pointer ${imageLoaded ? "" : "skeleton"}`}
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
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <span className="">Image Unavailable</span>
            </div>
          )}

          {!imageLoaded && (
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
      <div className="card-body flex flex-col justify-between gap-1 overflow-hidden p-2 pt-4">
        <h2 className="card-title line-clamp-1 overflow-hidden text-sm font-bold text-ellipsis">
          {cardData.name}
        </h2>
      </div>
    </div>
  );
}

export default SearchCard;

"use client";
import { CardBriefType } from "@/lib/types";
import Image from "next/image";

function SetCardDialog({ cardData }: { cardData: CardBriefType | null }) {
  return (
    <dialog id="card-modal" className="modal overflow-auto">
      {/* Width capped so the card's height also fits within 75% of the viewport */}
      <div className="modal-box w-[min(80vw,calc(75dvh*300/412))] max-w-none overflow-visible border-none bg-transparent p-0 shadow-none">
        <div className="hover-3d w-full">
          {cardData?.image && (
            <Image
              src={`${cardData.image}/high.webp`}
              alt={cardData.name}
              width={300}
              height={412}
              className="w-full rounded-lg"
            />
          )}

          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} />
          ))}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default SetCardDialog;

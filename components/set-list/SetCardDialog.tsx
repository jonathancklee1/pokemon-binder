"use client";
import { CardBriefType } from "@/lib/types";
import Image from "next/image";

function SetCardDialog({ cardData }: { cardData: CardBriefType | null }) {
  return (
    <dialog id="card-modal" className="modal overflow-auto">
      <div className="modal-box max-w-[80%] overflow-visible border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
        <div className="hover-3d w-full">
          {cardData?.image && (
            <Image
              src={`${cardData.image}/high.webp`}
              alt={cardData.name}
              width={200}
              height={200}
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

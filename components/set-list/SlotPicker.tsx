"use client";
import { BINDER_PAGE_COUNT } from "@/lib/constants";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import type { CardBriefType } from "@/lib/types";
import { getPageLabel, getPocketGridClass } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Image from "next/image";

/** Mini binder page for choosing the empty slot a card goes into. */
function SlotPicker({
  cardList,
  pocketSize,
  pageIndex,
  selectedSlot,
  onPageChange,
  onSelectSlot,
}: {
  cardList: (CardBriefType | null)[];
  pocketSize: 4 | 9 | 12;
  pageIndex: number;
  selectedSlot: number;
  onPageChange: (pageIndex: number) => void;
  onSelectSlot: (slotIndex: number) => void;
}) {
  const isMobile = useIsMobile();
  const firstSlot = pageIndex * pocketSize;
  const pageCards = cardList.slice(firstSlot, firstSlot + pocketSize);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="btn btn-sm"
          aria-label="Previous page"
          disabled={pageIndex <= 0}
          onClick={() => onPageChange(pageIndex - 1)}
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="font-bold">{getPageLabel(pageIndex, isMobile)}</span>
        <button
          type="button"
          className="btn btn-sm"
          aria-label="Next page"
          disabled={pageIndex >= BINDER_PAGE_COUNT - 1}
          onClick={() => onPageChange(pageIndex + 1)}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div
        className={`bg-background grid ${getPocketGridClass(pocketSize)} gap-2 rounded-md p-2`}
      >
        {pageCards.map((card, position) => {
          const slotIndex = firstSlot + position;
          const selected = slotIndex === selectedSlot;
          return (
            <button
              key={slotIndex}
              type="button"
              aria-label={`Slot ${position + 1}`}
              aria-pressed={selected}
              disabled={card !== null}
              onClick={() => onSelectSlot(slotIndex)}
              className={`grid aspect-110/154 place-items-center overflow-hidden border ${
                selected
                  ? "border-secondary bg-secondary/20 text-secondary border-2"
                  : "border-dashed border-white/30 bg-white/10"
              } ${card ? "" : "hover:border-secondary cursor-pointer"}`}
            >
              {card?.image && (
                <Image
                  src={`${card.image}/low.webp`}
                  alt={card.name}
                  width={110}
                  height={154}
                  className="h-full w-full opacity-50"
                />
              )}
              {selected && <Plus className="size-5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SlotPicker;

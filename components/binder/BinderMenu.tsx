"use client";
import { ChevronLeft, ChevronRight, Library, Pencil } from "lucide-react";
import { useState } from "react";
import { POCKET_SIZES } from "@/lib/constants";

export interface BinderMenuProps {
  name?: string;
  collectedCards?: number;
  totalCards?: number;
  pocketNumber?: 4 | 9 | 12;
  totalPages?: number;
}

function BinderMenu({
  name = "Binder",
  collectedCards = 0,
  totalCards = 0,
  pocketNumber = 9,
  totalPages = 1,
}: BinderMenuProps) {
  const [pocket, setPocket] = useState<number>(pocketNumber);
  const [spread, setSpread] = useState(0);

  const leftPage = spread * 2 + 1;
  const rightPage = Math.min(leftPage + 1, totalPages);
  const lastSpread = Math.max(Math.ceil(totalPages / 2) - 1, 0);

  return (
    <div className="bg-secondary-background border-border-color flex flex-wrap items-center justify-between gap-4 rounded-xl border-1 p-4">
      <div className="flex items-center gap-3">
        <div className="bg-secondary/15 text-secondary flex size-11 items-center justify-center rounded-xl">
          <Library className="size-5" />
        </div>
        <div>
          <div className="text-primary flex items-center gap-2 text-xl font-bold">
            {name}
            <button
              className="btn btn-ghost btn-xs btn-circle text-primary/70"
              aria-label="Edit binder name"
            >
              <Pencil className="size-3.5" />
            </button>
          </div>
          <p className="text-secondary text-sm font-semibold">
            {collectedCards} / {totalCards} Cards
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="tabs tabs-box">
          {POCKET_SIZES.map((size) => (
            <input
              type="radio"
              name="my_tabs_1"
              className="tab checked:bg-secondary font-semibold checked:text-black"
              aria-label={`${size}-Pocket`}
              key={size}
            />
            // <input
            //   key={size}
            //   type="radio"
            //   name="pocket-size"
            //   className="join-item btn btn-sm checked:!bg-secondary checked:!text-black"
            //   aria-label={`${size}-Pocket`}
            //   checked={pocket === size}

            // />
          ))}
        </div>

        <div className="join">
          <button
            className="join-item btn btn-sm"
            aria-label="Previous pages"
            disabled={spread === 0}
            onClick={() => setSpread(spread - 1)}
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="join-item btn btn-sm pointer-events-none">
            Pages {leftPage}&ndash;{rightPage} of {totalPages}
          </span>
          <button
            className="join-item btn btn-sm"
            aria-label="Next pages"
            disabled={spread >= lastSpread}
            onClick={() => setSpread(spread + 1)}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BinderMenu;

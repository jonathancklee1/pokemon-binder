"use client";
import { ChevronLeft, ChevronRight, Library, Pencil } from "lucide-react";
import { useState } from "react";
import { POCKET_SIZES } from "@/lib/constants";

export interface BinderMenuProps {
  name?: string;
  collectedCards?: number;
  pocketNumber?: 4 | 9 | 12;
  totalPages?: number;
  setPocketNumber?: (pocket: 4 | 9 | 12) => void;
}

function BinderMenu({
  name = "Binder",
  collectedCards = 0,
  pocketNumber = 9,
  totalPages = 1,
  setPocketNumber,
}: BinderMenuProps) {
  const [spread, setSpread] = useState(0);
  const [binderName, setBinderName] = useState(name);

  const leftPage = spread * 2 + 1;
  const rightPage = Math.min(leftPage + 1, totalPages);
  const lastSpread = Math.max(Math.ceil(totalPages / 2) - 1, 0);

  return (
    <div className="bg-secondary-background border-border-color flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-xl border p-4">
      <div className="flex items-center gap-3">
        <div className="bg-secondary/15 text-secondary flex size-11 items-center justify-center rounded-xl">
          <Library className="size-5" />
        </div>
        <div>
          <div className="text-primary mb-1 flex w-fit items-center gap-1 text-xl font-bold">
            <Pencil className="size-3.5" />
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost hover:border-secondary h-8 w-3/4 cursor-text border-2 p-0 pl-2 text-xl focus:ring-0 focus:outline-none"
              value={binderName}
              onChange={(e) => setBinderName(e.target.value)}
              aria-label="Binder name"
            />
          </div>
          <p className="text-secondary text-sm font-semibold">
            {collectedCards} Cards
          </p>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-between gap-3 lg:w-fit">
        <div className="tabs tabs-box w-full max-w-90 flex-nowrap justify-between overflow-x-auto sm:w-fit sm:justify-start sm:gap-2">
          {POCKET_SIZES.map((size) => (
            <input
              type="radio"
              name="my_tabs_1"
              className="tab checked:bg-secondary font-semibold checked:text-black"
              aria-label={`${size}-Pocket`}
              key={size}
              defaultChecked={pocketNumber === size}
              onChange={() => setPocketNumber && setPocketNumber(size)}
            />
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

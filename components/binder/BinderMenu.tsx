"use client";
import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Pipette,
  Trash,
} from "lucide-react";
import { useContext, useEffect } from "react";
import { POCKET_SIZES } from "@/lib/constants";
import PageNumberContext from "@/lib/contexts/PageNumberContext";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import {
  useBindersHydrated,
  useBindersStore,
} from "@/lib/stores/BinderStoreProvider";
import { useActiveBinder } from "@/lib/hooks/useActiveBinder";
import ColourPicker from "../ColourPicker";
import ActiveTabContext from "@/lib/contexts/ActiveTabContext";

const ICON_BUTTON =
  "text-muted grid size-9 cursor-pointer place-items-center transition-colors hover:text-white disabled:pointer-events-none disabled:opacity-30";

function BinderMenu() {
  const { changeName, setPocketSize, setColour, removeCollection, binders } =
    useBindersStore((state) => state);
  const { activeBinder, activePocketSize } = useActiveBinder();
  const { currentPage, setCurrentPage } = useContext(PageNumberContext);
  const { setActiveTab } = useContext(ActiveTabContext);
  const isMobile = useIsMobile();
  const maxPages = isMobile ? 42 : 21;
  function handleRemoveCollection() {
    removeCollection(activeBinder?.id ?? "");
    setActiveTab(
      binders.length - 2 ? (binders[binders.length - 2]?.id ?? "") : undefined,
    );
    // The daisyUI dropdown stays open while focus is inside it
    (document.activeElement as HTMLElement | null)?.blur();
  }
  useEffect(() => {
    setCurrentPage(0);
  }, [activePocketSize, setCurrentPage]);

  const hydrated = useBindersHydrated();

  const totalCards = activeBinder?.cardList.reduce((acc, card) => {
    if (card !== null) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return (
    <div className="border-line bg-surface flex flex-wrap items-center gap-3 rounded-2xl border p-3 md:p-4">
      {/* Identity: colour swatch, editable name, card count */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-label="Change binder colour"
            className="grid size-11 cursor-pointer place-items-center rounded-xl shadow-[inset_0_0_0_1px_rgb(255_255_255/0.2)] transition-transform hover:scale-105"
            style={{ backgroundColor: activeBinder?.colour ?? "#facc15" }}
          >
            <Pipette className="size-4 text-white drop-shadow" />
          </div>
          <div
            tabIndex={0}
            className="dropdown-content border-line bg-raised z-10 mt-2 rounded-2xl border p-3 shadow-[0_12px_32px_rgb(0_0_0/0.5)]"
          >
            <ColourPicker
              currentColour={activeBinder?.colour ?? "#facc15"}
              setCurrentColour={(colour) =>
                setColour(activeBinder?.id ?? "", colour)
              }
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          {hydrated ? (
            <label className="group flex max-w-md items-center gap-2">
              <input
                type="text"
                placeholder="Type here"
                className="focus:bg-ground w-full min-w-0 rounded-md bg-transparent px-1.5 py-0.5 -ml-1.5 text-lg font-semibold tracking-tight outline-none transition-colors hover:bg-white/5 focus:ring-1 focus:ring-white/20 md:text-xl"
                value={activeBinder?.name ?? ""}
                onChange={(e) =>
                  changeName(
                    (activeBinder && activeBinder.id) ?? "",
                    e.target.value,
                  )
                }
                aria-label="Binder name"
              />
              <Pencil className="text-muted size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
            </label>
          ) : (
            <div className="skeleton h-7 w-48" />
          )}
          <p className="text-muted text-sm tabular-nums">{totalCards} Cards</p>
        </div>
      </div>

      {/* Layout and navigation controls */}
      <div className="order-last flex w-full flex-wrap items-center justify-between gap-2 lg:order-none lg:w-auto lg:justify-end">
        <div
          role="radiogroup"
          aria-label="Pockets per page"
          className="bg-ground border-line flex w-full rounded-lg border p-0.5 sm:w-auto"
        >
          {POCKET_SIZES.map((size) => (
            <label
              key={size}
              className="text-muted has-checked:bg-raised flex-1 cursor-pointer rounded-md px-3 text-center py-1.5 text-sm font-medium whitespace-nowrap transition-colors hover:text-white has-checked:text-white has-disabled:pointer-events-none has-focus-visible:outline-2 has-focus-visible:outline-(--secondary)"
            >
              <input
                type="radio"
                name="pocket-size"
                className="sr-only"
                checked={hydrated && activePocketSize === size}
                disabled={!hydrated}
                onChange={() =>
                  setPocketSize && setPocketSize(activeBinder?.id ?? "", size)
                }
              />
              {size}-Pocket
            </label>
          ))}
        </div>

        <div className="bg-ground border-line flex w-full items-center justify-between rounded-lg border sm:w-auto">
          <button
            className={ICON_BUTTON}
            aria-label="Previous pages"
            disabled={!hydrated || currentPage <= 0}
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="min-w-26 text-center text-sm font-medium tabular-nums">
            {!hydrated ? (
              <span className="skeleton inline-block h-3 w-16" />
            ) : currentPage === 0 ? (
              "Cover"
            ) : (
              `Page ${currentPage} of ${maxPages}`
            )}
          </span>
          <button
            className={ICON_BUTTON}
            aria-label="Next pages"
            disabled={
              !hydrated ||
              (isMobile ? currentPage > maxPages : currentPage >= maxPages)
            }
            onClick={() => setCurrentPage(Math.min(maxPages, currentPage + 1))}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="dropdown dropdown-bottom dropdown-end">
        <button
          tabIndex={0}
          role="button"
          className="border-line text-muted grid size-9 place-items-center rounded-lg border transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
          aria-label="Delete binder"
        >
          <Trash className="size-4" />
        </button>
        <div
          tabIndex={0}
          className="dropdown-content border-line bg-raised z-10 mt-2 w-72 rounded-2xl border p-4 shadow-[0_12px_32px_rgb(0_0_0/0.5)]"
        >
          <p className="font-semibold">
            Are you sure you want to delete this binder?
          </p>
          <p className="text-muted mt-1 text-sm">Changes cannot be reverted!</p>
          <button
            className="mt-4 flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-red-600 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            onClick={handleRemoveCollection}
          >
            <Trash className="size-4" />
            Delete Binder
          </button>
        </div>
      </div>
    </div>
  );
}

export default BinderMenu;

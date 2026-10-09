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

function BinderMenu() {
  const { changeName, setPocketSize, setColour, removeCollection, binders } =
    useBindersStore((state) => state);
  const { activeBinder, activePocketSize } = useActiveBinder();
  const { currentPage, setCurrentPage } = useContext(PageNumberContext);
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const isMobile = useIsMobile();
  // const maxPages =
  //   (activePocketSize &&
  //     activeBinder?.cardList &&
  //     Math.ceil(activeBinder?.cardList.length / activePocketSize)) ??
  //   1;
  const maxPages = isMobile ? 42 : 21;
  // console.log(
  //   "maxPages",
  //   activeBinder,
  //   activeTab,
  //   activeBinder?.cardList.length,
  //   activePocketSize,
  //   Math.ceil((activeBinder?.cardList.length ?? 1) / (activePocketSize || 1)),
  // );
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
    <div className="bg-secondary-background border-border-color mb-3 flex flex-wrap items-center justify-between gap-4 rounded-xl border p-4">
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-between gap-3">
          <div className="text-secondary flex size-11 items-center justify-center rounded-xl">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="text-secondary flex size-11 cursor-pointer items-center justify-center rounded-xl"
                style={{ backgroundColor: activeBinder?.colour ?? "#facc15" }}
              >
                <Pipette className="size-5 text-white" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
              >
                <div className="card-body">
                  <ColourPicker
                    currentColour={activeBinder?.colour ?? "#facc15"}
                    setCurrentColour={(colour) =>
                      setColour(activeBinder?.id ?? "", colour)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-primary mb-1 flex w-fit items-center gap-1 text-xl font-bold">
              <Pencil className="size-3.5" />
              {hydrated ? (
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost hover:border-secondary h-8 w-3/4 cursor-text border-2 p-0 pl-2 text-xl focus:ring-0 focus:outline-none"
                  value={activeBinder?.name ?? ""}
                  onChange={(e) =>
                    changeName(
                      (activeBinder && activeBinder.id) ?? "",
                      e.target.value,
                    )
                  }
                  aria-label="Binder name"
                />
              ) : (
                <div className="skeleton h-8 w-48" />
              )}
            </div>
            <p className="text-secondary text-sm font-semibold">
              {totalCards} Cards
            </p>
          </div>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end h-fit pb-1">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-sm hover:btn-error"
            aria-label="New binder"
          >
            <Trash />
          </button>
          <div
            tabIndex={0}
            className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
          >
            <div className="card-body">
              <p className="text-base font-bold">
                Are you sure you want to delete this binder? <br />
                Changes cannot be reverted!
              </p>
              <button
                className="btn btn-wide btn-error"
                onClick={handleRemoveCollection}
              >
                <Trash />
                Delete Binder
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-between gap-3">
        <div className="tabs tabs-box max-w-90 flex-nowrap justify-between overflow-x-auto sm:w-fit sm:justify-start sm:gap-2">
          {POCKET_SIZES.map((size) => (
            <input
              type="radio"
              name="my_tabs_1"
              className="tab checked:bg-secondary font-semibold checked:text-black"
              aria-label={`${size}-Pocket`}
              key={size}
              checked={hydrated && activePocketSize === size}
              disabled={!hydrated}
              onChange={() =>
                setPocketSize && setPocketSize(activeBinder?.id ?? "", size)
              }
            />
          ))}
        </div>

        <div className="join">
          <button
            className="join-item btn btn-sm"
            aria-label="Previous pages"
            disabled={!hydrated || currentPage <= 0}
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="join-item btn btn-sm pointer-events-none min-w-25">
            {!hydrated ? (
              <span className="skeleton h-3 w-16" />
            ) : currentPage === 0 ? (
              "Cover"
            ) : (
              `Page ${currentPage} of ${maxPages}`
            )}
          </span>
          <button
            className="join-item btn btn-sm"
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
    </div>
  );
}

export default BinderMenu;

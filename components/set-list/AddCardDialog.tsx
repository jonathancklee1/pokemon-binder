"use client";
import SlotPicker from "@/components/set-list/SlotPicker";
import { BINDER_PAGE_COUNT } from "@/lib/constants";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { useBindersStore } from "@/lib/stores/BinderStoreProvider";
import { CardBriefType } from "@/lib/types";
import { getPageLabel } from "@/lib/utils";
import Image from "next/image";
import { SubmitEvent, useState } from "react";
import { toast, Flip } from "react-toastify";

function AddCardDialog({
  cardData,
  handleAddCardClick,
}: {
  cardData: CardBriefType | null;
  handleAddCardClick: (card: CardBriefType | null) => void;
}) {
  const { binders, addCard } = useBindersStore((state) => state);
  const isMobile = useIsMobile();
  const [selectedBinder, setSelectedBinder] = useState("");
  // null means "use the first empty slot" and "show the page it is on"
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  const binder = binders.find((b) => b.id === selectedBinder) ?? binders[0];
  const pocketSize = binder?.pocketSize ?? 4;
  const firstEmptySlot =
    binder?.cardList
      .slice(0, BINDER_PAGE_COUNT * pocketSize)
      .findIndex((card) => card === null) ?? -1;
  const slot = selectedSlot ?? firstEmptySlot;
  const binderFull = slot === -1;
  const slotPage = binderFull ? 0 : Math.floor(slot / pocketSize);
  const pageIndex = selectedPage ?? slotPage;
  const slotLabel = `${getPageLabel(slotPage, isMobile)}, slot ${(slot % pocketSize) + 1}`;

  function resetSlot() {
    setSelectedSlot(null);
    setSelectedPage(null);
  }

  function handleAddButtonClick(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cardData === null || binderFull) return;
    addCard(cardData, binder.id, slot);
    toast.success(`Added to ${binder.name}, ${slotLabel}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
    handleAddCardClick(cardData);
    resetSlot();
    e.currentTarget.closest("dialog")?.close();
  }
  return (
    <dialog id="add-card-modal" className="modal">
      <div className="modal-box glass flex max-w-3xl flex-col gap-6 border-4! p-8! md:flex-row">
        <div className="mx-auto w-40 shrink-0 md:w-1/2">
          <div className="hover-3d w-full">
            {cardData?.image && (
              <Image
                src={`${cardData.image}/high.webp`}
                alt={cardData?.name ?? ""}
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
            )}
            {/* 8 empty divs required by daisyUI hover-3d as hover zones */}
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} />
            ))}
          </div>
        </div>
        <form
          className="flex flex-1 flex-col gap-4"
          onSubmit={handleAddButtonClick}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="binderName" className="text-lg font-bold">
              Select a binder
            </label>
            <select
              name="binderName"
              className="select border-secondary bg-background/85 w-full cursor-pointer border py-5 text-lg font-bold"
              value={binder?.id ?? ""}
              onChange={(e) => {
                setSelectedBinder(e.target.value);
                resetSlot();
              }}
            >
              {binders.map((binder) => (
                <option
                  key={binder.id}
                  value={binder.id}
                  className="hover:text-secondary"
                >
                  {binder.name}
                </option>
              ))}
            </select>
          </div>
          {binder && (
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold">Choose a slot</span>
              <SlotPicker
                cardList={binder.cardList}
                pocketSize={pocketSize}
                pageIndex={pageIndex}
                selectedSlot={slot}
                onPageChange={setSelectedPage}
                onSelectSlot={setSelectedSlot}
              />
              <p className="text-secondary text-sm font-semibold">
                {binderFull ? "This binder is full" : `${slotLabel} selected`}
              </p>
            </div>
          )}
          <button
            className="btn bg-secondary text-primary-text hover:inset-shadow-2xs, rounded-xl py-5! text-base font-bold! transition-all hover:brightness-110"
            type="submit"
            disabled={!binder || binderFull}
          >
            Add Card
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddCardDialog;

"use client";
import { useBindersStore } from "@/lib/stores/BinderStoreProvider";
import { CardBriefType } from "@/lib/types";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { toast, Flip } from "react-toastify";

function AddCardDialog({
  cardData,
  handleAddCardClick,
}: {
  cardData: CardBriefType | null;
  handleAddCardClick: (card: CardBriefType | null) => void;
}) {
  const { binders, addCard } = useBindersStore((state) => state);
  const [selectedBinder, setSelectedBinder] = useState("Pick a binder");
  const notify = () =>
    toast.success("Card added to binder!", {
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

  function handleAddButtonClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cardData === null) return;
    addCard(cardData, selectedBinder);
    handleAddCardClick(cardData);
    notify();
    e.currentTarget.closest("dialog")?.close();
  }
  return (
    <dialog id="add-card-modal" className="modal">
      <div className="modal-box glass border-4!">
        {cardData?.image && (
          <Image
            src={`${cardData.image}/high.webp`}
            alt={cardData?.name ?? ""}
            width={200}
            height={200}
            className="w-full rounded-lg"
          />
        )}
        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={handleAddButtonClick}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="binderName" className="text-lg font-bold">
              Select a binder
            </label>
            <select
              name="binderName"
              className="select border-secondary bg-background/90 cursor-pointer border text-lg"
              value={selectedBinder}
              onChange={(e) => {
                setSelectedBinder(e.target.value);
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
          <button
            className="btn bg-secondary text-primary-text hover:inset-shadow-2xs, rounded-xl py-5! text-base font-bold! transition-all hover:brightness-110"
            type="submit"
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

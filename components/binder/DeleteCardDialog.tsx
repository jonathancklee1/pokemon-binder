"use client";
import { useActiveBinder } from "@/lib/hooks/useActiveBinder";
import { useBindersStore } from "@/lib/stores/BinderStoreProvider";
import { MouseEvent } from "react";
import { toast, Flip } from "react-toastify";

/** Asks the user to confirm removing the card in `slot` from the active binder. */
function DeleteCardDialog({ slot }: { slot: number | null }) {
  const { activeBinder } = useActiveBinder();
  const removeCard = useBindersStore((state) => state.removeCard);
  const card = slot === null ? null : activeBinder?.cardList[slot];

  function handleCardDelete(e: MouseEvent<HTMLButtonElement>) {
    if (!activeBinder || slot === null) return;
    removeCard(activeBinder.id, slot);
    toast.success(`Removed ${card?.name ?? "card"} from ${activeBinder.name}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Flip,
    });
    e.currentTarget.closest("dialog")?.close();
  }

  return (
    <dialog id="delete-card-modal" className="modal">
      <div className="modal-box border-line bg-surface flex max-w-md flex-col gap-6 rounded-2xl border p-6 shadow-[0_24px_64px_rgb(0_0_0/0.6)]">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Delete card?</h2>
          <p className="text-muted text-sm">
            Remove {card?.name ?? "this card"} from {activeBinder?.name}?
          </p>
        </div>
        <div className="flex justify-end gap-3">
          <form method="dialog">
            <button className="border-line h-11 cursor-pointer rounded-lg border px-4 text-sm font-semibold transition-colors hover:bg-white/10">
              Cancel
            </button>
          </form>
          <button
            className="h-11 cursor-pointer rounded-lg bg-red-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-red-500/80"
            onClick={handleCardDelete}
          >
            Delete card
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default DeleteCardDialog;

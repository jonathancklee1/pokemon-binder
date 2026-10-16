"use client";

/** Asks the user to confirm deleting the named binder. */
function DeleteBinderDialog({
  binderName,
  onConfirm,
}: {
  binderName?: string;
  onConfirm: () => void;
}) {
  return (
    <dialog id="delete-binder-modal" className="modal">
      <div className="modal-box border-line bg-surface flex max-w-md flex-col gap-6 rounded-2xl border p-6 shadow-[0_24px_64px_rgb(0_0_0/0.6)]">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Delete binder?</h2>
          <p className="text-muted text-sm">
            Are you sure you want to delete {binderName ?? "this binder"}?
            Changes cannot be reverted!
          </p>
        </div>
        <form method="dialog" className="flex justify-end gap-3">
          <button className="border-line h-11 cursor-pointer rounded-lg border px-4 text-sm font-semibold transition-colors hover:bg-white/10">
            Cancel
          </button>
          <button
            className="h-11 cursor-pointer rounded-lg bg-red-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-red-500/80"
            onClick={onConfirm}
          >
            Delete binder
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default DeleteBinderDialog;

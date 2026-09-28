import { useBindersStore } from "@/lib/stores/BinderStoreProvider";

/** Returns the binder matching `activeTab` and its pocket size. */
export function useActiveBinder(activeTab: string) {
  const activeBinder = useBindersStore((state) =>
    state.binders.find((binder) => binder.id === activeTab),
  );
  return { activeBinder, activePocketSize: activeBinder?.pocketSize };
}

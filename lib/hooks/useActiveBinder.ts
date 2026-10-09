import { useContext } from "react";
import ActiveTabContext from "@/lib/contexts/ActiveTabContext";
import { useBindersStore } from "@/lib/stores/BinderStoreProvider";

export function useActiveBinder() {
  const activeTabContext = useContext(ActiveTabContext);
  const activeBinder = useBindersStore((state) =>
    state.binders.find((binder) => binder.id === activeTabContext?.activeTab),
  );
  return { activeBinder, activePocketSize: activeBinder?.pocketSize };
}

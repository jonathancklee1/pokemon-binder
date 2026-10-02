// src/providers/counter-store-provider.tsx
"use client";

import {
  type ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
  useSyncExternalStore,
} from "react";
import { useStore } from "zustand";

import {
  type BindersStore,
  createBindersStore,
} from "@/lib/stores/BindersStore";

export type BindersStoreApi = ReturnType<typeof createBindersStore>;

export const BindersStoreContext = createContext<BindersStoreApi | undefined>(
  undefined,
);

export interface BindersStoreProviderProps {
  children: ReactNode;
}

export const BindersStoreProvider = ({
  children,
}: BindersStoreProviderProps) => {
  const [store] = useState(() => createBindersStore());

  // Load saved state from localStorage after mount (not available during SSR).
  useEffect(() => {
    store.persist.rehydrate();
  }, [store]);

  return (
    <BindersStoreContext.Provider value={store}>
      {children}
    </BindersStoreContext.Provider>
  );
};

const useBindersStoreApi = () => {
  const bindersStoreContext = useContext(BindersStoreContext);
  if (!bindersStoreContext) {
    throw new Error(`useBindersStore must be used within BindersStoreProvider`);
  }
  return bindersStoreContext;
};

export const useBindersStore = <T,>(selector: (store: BindersStore) => T): T =>
  useStore(useBindersStoreApi(), selector);

/** True once the saved binders have been loaded from localStorage. */
export const useBindersHydrated = () => {
  const store = useBindersStoreApi();
  // `store.persist` is undefined on the server (no localStorage), so only access it inside client-only callbacks.
  const subscribe = useCallback(
    (onChange: () => void) => store.persist.onFinishHydration(onChange),
    [store],
  );
  return useSyncExternalStore(
    subscribe,
    () => store.persist.hasHydrated(),
    () => false,
  );
};

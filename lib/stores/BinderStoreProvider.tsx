// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useState, useContext } from "react";
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
  return (
    <BindersStoreContext.Provider value={store}>
      {children}
    </BindersStoreContext.Provider>
  );
};

export const useBindersStore = <T,>(
  selector: (store: BindersStore) => T,
): T => {
  const bindersStoreContext = useContext(BindersStoreContext);
  if (!bindersStoreContext) {
    throw new Error(`useBindersStore must be used within BindersStoreProvider`);
  }

  return useStore(bindersStoreContext, selector);
};

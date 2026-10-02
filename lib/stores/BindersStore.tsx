// src/stores/Binders-store.ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { CardDataType } from "../types";
import { DEFAULT_BINDERS } from "./defaultBinders";

export type BinderType = {
  id: string;
  name: string;
  cardList: CardDataType[];
  pocketSize: 4 | 9 | 12;
  currentPage: number;
};

export type BindersState = {
  binders: BinderType[];
};

export type BindersActions = {
  changeName: (id: string, name: string) => void;
  addCard: () => void;
  removeCard: () => void;
  changeCurrentPage: (number: number) => void;
  setPocketSize: (id: string, pocketNumber: 4 | 9 | 12) => void;
};

export type BindersStore = BindersState & BindersActions;

export const defaultInitState: BindersState = {
  binders: DEFAULT_BINDERS,
};

export const createBindersStore = (
  initState: BindersState = defaultInitState,
) => {
  return createStore<BindersStore>()(
    persist(
      (set) => ({
        ...initState,
        changeName: (id, name) =>
          set((state) => ({
            binders: state.binders.map((binder) => {
              if (binder.id === id) {
                return { ...binder, name };
              }
              return binder;
            }),
          })),
        addCard: () => {}, //TODO
        removeCard: () => {}, //TODO
        changeCurrentPage: () => {}, //TODO
        setPocketSize: (id, pocketNumber) =>
          set((state) => ({
            binders: state.binders.map((binder) => {
              if (binder.id === id) {
                return { ...binder, pocketSize: pocketNumber };
              }
              return binder;
            }),
          })),
      }),
      {
        name: "binders-storage",
        partialize: (state) => ({ binders: state.binders }),
        // Rehydrated manually on mount to avoid SSR hydration mismatch.
        skipHydration: true,
      },
    ),
  );
};

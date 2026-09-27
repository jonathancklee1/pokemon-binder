// src/stores/Binders-store.ts
import { createStore } from "zustand/vanilla";
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
};

export type BindersStore = BindersState & BindersActions;

export const defaultInitState: BindersState = {
  binders: DEFAULT_BINDERS,
};

export const createBindersStore = (
  initState: BindersState = defaultInitState,
) => {
  return createStore<BindersStore>()((set) => ({
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
  }));
};

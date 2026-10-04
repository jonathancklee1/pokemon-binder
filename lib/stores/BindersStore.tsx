// src/stores/Binders-store.ts
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { CardDataType } from "../types";
import { createNewCardList } from "../utils";

export type BinderType = {
  id: string;
  name: string;
  cardList: CardDataType[];
  pocketSize: 4 | 9 | 12;
  currentPage: number;
  colour?: string;
};

export type BindersState = {
  binders: BinderType[] | [];
};

export type BindersActions = {
  changeName: (id: string, name: string) => void;
  addCard: () => void;
  removeCard: () => void;
  changeCurrentPage: (number: number) => void;
  setPocketSize: (id: string, pocketNumber: 4 | 9 | 12) => void;
  addCollection: () => string;
  setColour: (id: string, colour: string) => void;
};

export type BindersStore = BindersState & BindersActions;

export const defaultInitState: BindersState = {
  binders: [],
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
        setColour: (id, colour) =>
          set((state) => ({
            binders: state.binders.map((binder) => {
              if (binder.id === id) {
                return { ...binder, colour };
              }
              return binder;
            }),
          })),
        addCollection: () => {
          const id = crypto.randomUUID();
          set((state) => {
            const newNameCount = state.binders.reduce(
              (count, binder) =>
                binder.name.startsWith("New Collection") ? count + 1 : count,
              0,
            );
            const newCollectionName = `New Collection ${newNameCount + 1}`;
            return {
              binders: [
                ...state.binders,
                {
                  id,
                  name: newCollectionName,
                  cardList: createNewCardList(),
                  pocketSize: 4,
                  currentPage: 1,
                  colour: "#facc15",
                },
              ],
            };
          });
          return id;
        },
      }),
      {
        name: "binders-storage",
        partialize: (state) => ({ binders: state.binders }),
        skipHydration: true,
      },
    ),
  );
};

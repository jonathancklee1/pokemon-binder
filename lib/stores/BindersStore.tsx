import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { CardBriefType } from "../types";
import { createNewCardList, getRandomHexColour } from "../utils";

export type BinderType = {
  id: string;
  name: string;
  cardList: (CardBriefType | null)[];
  pocketSize: 4 | 9 | 12;
  currentPage: number;
  colour?: string;
};

export type BindersState = {
  binders: BinderType[] | [];
};

export type BindersActions = {
  changeName: (id: string, name: string) => void;
  addCard: (card: CardBriefType, binderId: string, slotIndex: number) => void;
  removeCard: (binderId: string, slotIndex: number) => void;
  setPocketSize: (id: string, pocketNumber: 4 | 9 | 12) => void;
  addCollection: () => string;
  removeCollection: (id: string) => void;
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
        addCard: (card, binderId, slotIndex) =>
          set((state) => ({
            binders: state.binders.map((binder) =>
              binder.id === binderId
                ? {
                    ...binder,
                    cardList: binder.cardList.map((slot, index) =>
                      index === slotIndex ? card : slot,
                    ),
                  }
                : binder,
            ),
          })),
        removeCard: (binderId, slotIndex) =>
          set((state) => ({
            binders: state.binders.map((binder) =>
              binder.id === binderId
                ? {
                    ...binder,
                    cardList: binder.cardList.map((slot, index) =>
                      index === slotIndex ? null : slot,
                    ),
                  }
                : binder,
            ),
          })),
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
        removeCollection: (id) =>
          set((state) => ({
            binders: state.binders.filter((binder) => binder.id !== id),
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
                  colour: getRandomHexColour(),
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

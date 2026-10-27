import { describe, expect, it } from "vitest";
import { createBindersStore } from "./BindersStore";
import { hexRegex } from "../constants";

describe("addCollection", () => {
  it("adds a binder with 480 empty slots, pocketSize 4 and a colour", () => {
    const store = createBindersStore();
    store.getState().addCollection();
    const binders = store.getState().binders;
    const newBinder = binders[0];
    expect(newBinder.cardList.length).toBe(480);
    expect(newBinder.cardList.every((slot) => slot === null)).toBe(true);
    expect(newBinder.pocketSize).toBe(4);
    expect(newBinder.colour).toMatch(hexRegex);
    expect(binders).toHaveLength(1);
  });
});

describe("removeCollection", () => {
  it("removes only the binder with the given id", () => {
    const store = createBindersStore();
    const keepId = store.getState().addCollection();
    const removeId = store.getState().addCollection();

    store.getState().removeCollection(removeId);

    const ids = store.getState().binders.map((binder) => binder.id);
    expect(ids).toEqual([keepId]);
  });
});
describe("add and remove card", () => {
  it("adds card to the given slot", () => {
    const store = createBindersStore();
    const binderId = store.getState().addCollection();
    const newCard = {
      id: "card-1",
      image: "",
      name: "",
      localId: "",
    };
    store.getState().addCard(newCard, binderId, 1);

    const cardList = store.getState().binders[0].cardList;
    expect(cardList[1]).toEqual(newCard);
    expect(cardList.filter((slot) => slot !== null)).toHaveLength(1);
  });
  it("removes card given the slot index back to null", () => {
    const store = createBindersStore();
    const binderId = store.getState().addCollection();
    store.getState().addCollection();
    const newCard = {
      id: "card-1",
      image: "",
      name: "",
      localId: "",
    };
    const cardList = store.getState().binders[0].cardList;

    store.getState().addCard(newCard, binderId, 1);
    store.getState().removeCard(binderId, 1);
    expect(cardList.every(() => null));
  });
  it("changes the correct binder name", () => {
    const store = createBindersStore();
    store.getState().addCollection();
    const changeBinderId = store.getState().addCollection();
    store.getState().changeName(changeBinderId, "new-name");

    expect(store.getState().binders[1].name).toBe("new-name");
  });
  it("changes the correct pocket size", () => {
    const store = createBindersStore();
    store.getState().addCollection();
    const changeBinderId = store.getState().addCollection();
    store.getState().setPocketSize(changeBinderId, 12);

    expect(store.getState().binders[1].pocketSize).toBe(12);
  });
  it("changes the correct binder colour", () => {
    const store = createBindersStore();
    store.getState().addCollection();
    const changeBinderId = store.getState().addCollection();
    store.getState().setColour(changeBinderId, "#ffffff");

    expect(store.getState().binders[1].colour).toBe("#ffffff");
  });
});

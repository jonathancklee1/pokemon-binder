import { describe, expect, it } from "vitest";
import {
  chunkArray,
  createNewCardList,
  getPageLabel,
  getPocketGridClass,
  getRandomHexColour,
} from "./utils";

describe("chunkArray", () => {
  it("chunks the array correctly", () => {
    const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
  it("returns an empty array when chunking", () => {
    const result = chunkArray([], 3);
    expect(result).toEqual([]);
  });
});

describe("createNewCardList", () => {
  it("creates an array of 480 nulls", () => {
    const nullArray = createNewCardList();
    const has480Null =
      nullArray.every((x) => x === null) && nullArray.length === 480;
    expect(has480Null).toBeTruthy();
  });
});

describe("getPocketGridClass", () => {
  it("returns the correct grid classes when 4 pockets", () => {
    expect(getPocketGridClass(4)).toBe("grid-cols-2 grid-rows-2");
  });
  it("returns the correct grid classes when 9 pockets", () => {
    expect(getPocketGridClass(9)).toBe("grid-cols-3 grid-rows-3");
  });
  it("returns the correct grid classes when 12 pockets", () => {
    expect(getPocketGridClass(12)).toBe("grid-cols-4 grid-rows-3");
  });
});
describe("getPageLabel", () => {
  it("returns correctly when page index is 0 on mobile", () => {
    expect(getPageLabel(0, true)).toBe("Page 1");
  });
  it("returns correctly when page index is 0 on desktop", () => {
    expect(getPageLabel(0, false)).toBe("Page 1 - Right");
  });
  it("returns correctly when page index is 21 on mobile", () => {
    expect(getPageLabel(21, true)).toBe("Page 22");
  });
  it("returns correctly when page index is 5 on desktop", () => {
    expect(getPageLabel(5, false)).toBe("Page 4 - Left");
  });
});

describe("getRandomHexColour", () => {
  it("gets a valid hex colour", () => {
    expect(getRandomHexColour().slice(0, 1)).toBe("#");
    expect(getRandomHexColour().slice(1).split("").length).toBe(6);
  });
});

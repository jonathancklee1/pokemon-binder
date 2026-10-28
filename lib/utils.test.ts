import { afterEach, describe, expect, it, vi } from "vitest";
import {
  chunkArray,
  createNewCardList,
  getPageLabel,
  getPocketGridClass,
  getRandomHexColour,
} from "./utils";
import { hexRegex } from "./constants";

describe("chunkArray", () => {
  it("chunks the array correctly", () => {
    const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
  it("last group is shorter when the length is not divisible by k", () => {
    const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
    expect(result[result.length - 1].length).toBeLessThan(result[0].length);
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
  it.each([
    { pocketSize: 4, classString: "grid-cols-2 grid-rows-2" },
    { pocketSize: 9, classString: "grid-cols-3 grid-rows-3" },
    { pocketSize: 12, classString: "grid-cols-4 grid-rows-3" },
  ])(
    "returns the correct $classString strings for each $pocketSize",
    ({ pocketSize, classString }) => {
      expect(getPocketGridClass(pocketSize as 4 | 9 | 12)).toBe(classString);
    },
  );
});
describe("getPageLabel", () => {
  it("returns correctly when page index is 0 on mobile", () => {
    expect(getPageLabel(0, true)).toBe("Page 1");
  });
  it.each([
    { index: 0, expected: "Page 1 - Right" },
    { index: 1, expected: "Page 2 - Left" },
    { index: 2, expected: "Page 2 - Right" },
  ])(
    "returns the correct $expected page name when page $index on desktop",
    ({ index, expected }) => {
      expect(getPageLabel(index, false)).toBe(expected);
    },
  );
});

describe("getRandomHexColour", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("gets a valid hex colour", () => {
    expect(getRandomHexColour()).match(hexRegex);
  });
  it("returns black hex for 0", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(getRandomHexColour()).toBe("#000000");
  });
  it("returns white hex for the highest random value", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.99999999);
    expect(getRandomHexColour()).toBe("#ffffff");
  });
});

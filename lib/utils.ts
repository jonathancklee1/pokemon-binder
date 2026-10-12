import { CardBriefType } from "./types";

export function chunkArray<T>(array: T[], k: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += k) {
    const subarray = array.slice(i, i + k);
    result.push(subarray);
  }

  return result;
}

export function createNewCardList(): CardBriefType[] | null[] {
  return Array.from({ length: 480 }, () => null);
}

export function getRandomHexColour() {
  return `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, "0")}`;
}

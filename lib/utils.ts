import { CardDataType } from "./types";

export function chunkArray<T>(array: T[], k: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += k) {
    const subarray = array.slice(i, i + k);
    result.push(subarray);
  }

  return result;
}

export function createNewCardList(): CardDataType[] {
  return Array.from({ length: 480 }, () => null);
}

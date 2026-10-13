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

/** Tailwind grid classes for a binder page with the given pocket size. */
export function getPocketGridClass(pocketSize: 4 | 9 | 12) {
  return pocketSize === 4
    ? "grid-cols-2 grid-rows-2"
    : pocketSize === 9
      ? "grid-cols-3 grid-rows-3"
      : "grid-cols-4 grid-rows-3";
}

/** Label for a page index, matching the desktop spreads or the mobile carousel. */
export function getPageLabel(pageIndex: number, isMobile: boolean) {
  if (isMobile) return `Page ${pageIndex + 1}`;
  const spread = Math.floor((pageIndex + 1) / 2) + 1;
  return `Page ${spread} - ${pageIndex % 2 === 0 ? "Right" : "Left"}`;
}

export function getRandomHexColour() {
  return `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, "0")}`;
}

import { cacheLife } from "next/cache";

export async function searchCards(name: string) {
  "use cache";
  cacheLife("days");
  const res = await fetch(
    `https://api.tcgdex.net/v2/en/cards?name=${encodeURIComponent(name)}`,
  );
  if (!res.ok) throw new Error("Failed to fetch cards");
  return res.json();
}

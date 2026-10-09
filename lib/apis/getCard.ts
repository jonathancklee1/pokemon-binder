import { cacheLife } from "next/cache";

export async function getCard(id: string) {
  "use cache";
  cacheLife("days");
  const res = await fetch(`https://api.tcgdex.net/v2/en/cards/${id}`);
  if (!res.ok) throw new Error("Failed to fetch card of ID: " + id);
  return res.json();
}

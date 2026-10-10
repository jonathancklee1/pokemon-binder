import { cacheLife } from "next/cache";
import type { SetType } from "@/lib/types";

export async function getSets(): Promise<SetType[]> {
  "use cache";
  cacheLife("days");
  const res = await fetch(`https://api.tcgdex.net/v2/en/sets`);
  if (!res.ok) throw new Error("Failed to fetch sets");
  return res.json();
}

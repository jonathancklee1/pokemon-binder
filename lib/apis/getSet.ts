import { cacheLife } from "next/cache";
import type { SetDetailType } from "@/lib/types";

async function getSet(id: string): Promise<SetDetailType> {
  "use cache";
  cacheLife("days");
  const res = await fetch(`https://api.tcgdex.net/v2/en/sets/${id}`);
  if (!res.ok) throw new Error("Failed to fetch set");
  return res.json();
}

export default getSet;

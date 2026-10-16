import { cacheLife } from "next/cache";
import type { SerieType } from "@/lib/types";

const API_URL = "https://api.tcgdex.net/v2/en/series";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch series");
  return res.json();
}

/** All series with their sets, newest series and sets first. */
export async function getSeries(): Promise<SerieType[]> {
  "use cache";
  cacheLife("days");
  const briefs = await fetchJson<{ id: string }[]>(API_URL);
  const series = await Promise.all(
    briefs.map((brief) => fetchJson<SerieType>(`${API_URL}/${brief.id}`)),
  );
  return series
    .map((serie) => ({ ...serie, sets: serie.sets.toReversed() }))
    .toReversed();
}

"use client";
import { useState } from "react";
import type { SerieType } from "@/lib/types";
import SetFilter from "./SetFilter";
import SetGrid from "./SetGrid";

/** Searchable list of sets, grouped under a heading per series. */
function SetContainer({ series }: { series: SerieType[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSeries = series
    .map((serie) => ({
      ...serie,
      sets: serie.sets.filter((set) =>
        set.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((serie) => serie.sets.length > 0);
  const countSets = (list: SerieType[]) =>
    list.reduce((total, serie) => total + serie.sets.length, 0);
  return (
    <>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SetFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <p className="text-muted text-sm tabular-nums">
          {countSets(filteredSeries)} of {countSets(series)} sets
        </p>
      </div>
      {filteredSeries.length === 0 && (
        <div className="border-line text-muted flex w-full items-center justify-center rounded-2xl border border-dashed px-4 py-16 text-center">
          No sets found.
        </div>
      )}
      <div className="flex flex-col gap-10">
        {filteredSeries.map((serie) => (
          <section key={serie.id} className="flex flex-col gap-4">
            <div className="flex items-baseline gap-2">
              <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                {serie.name}
              </h2>
              <span className="text-muted text-sm tabular-nums">
                {serie.sets.length} {serie.sets.length === 1 ? "set" : "sets"}
              </span>
            </div>
            <SetGrid sets={serie.sets} />
          </section>
        ))}
      </div>
    </>
  );
}

export default SetContainer;

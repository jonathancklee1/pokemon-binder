"use client";
import { useState } from "react";
import type { SetType } from "@/lib/types";
import SetFilter from "./SetFilter";
import SetGrid from "./SetGrid";

function SetContainer({ sets }: { sets: SetType[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSets = sets.filter((set) =>
    set.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SetFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <p className="text-muted text-sm tabular-nums">
          {filteredSets.length} of {sets.length} sets
        </p>
      </div>
      {filteredSets.length === 0 && (
        <div className="border-line text-muted flex w-full items-center justify-center rounded-2xl border border-dashed px-4 py-16 text-center">
          No sets found.
        </div>
      )}
      <SetGrid sets={filteredSets} />
    </>
  );
}

export default SetContainer;

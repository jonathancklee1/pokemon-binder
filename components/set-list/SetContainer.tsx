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
      <div className="mb-4 flex w-full flex-col gap-4 md:flex-row">
        <SetFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {filteredSets.length === 0 && (
        <div className="flex w-full items-center justify-center rounded-lg p-4 text-center text-gray-500">
          No sets found.
        </div>
      )}
      <SetGrid sets={filteredSets} />
    </>
  );
}

export default SetContainer;

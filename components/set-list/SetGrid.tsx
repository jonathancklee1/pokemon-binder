import type { SetType } from "@/lib/types";
import SetCard from "./SetCard";

function SetGrid({ sets }: { sets: SetType[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {sets.map((set) => (
        <SetCard key={set.id} set={set} />
      ))}
    </div>
  );
}

export default SetGrid;

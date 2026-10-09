import { getSets } from "@/lib/apis/getSets";
import SetCard from "./SetCard";

async function SetGrid() {
  const sets = await getSets();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {sets.map((set) => (
        <SetCard key={set.id} set={set} />
      ))}
    </div>
  );
}

export default SetGrid;

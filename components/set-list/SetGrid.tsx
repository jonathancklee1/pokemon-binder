import type { SetType } from "@/lib/types";
import SetCard from "./SetCard";
import { ReactNode } from "react";

function SetGrid({
  children,
  sets,
}: {
  children?: ReactNode;
  sets?: SetType[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
      {sets ? sets?.map((set) => <SetCard key={set.id} set={set} />) : children}
    </div>
  );
}

export default SetGrid;

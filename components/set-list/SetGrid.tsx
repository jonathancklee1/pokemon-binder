import type { SetType } from "@/lib/types";
import SetCard from "./SetCard";
import { ReactNode } from "react";

export const SET_GRID_CLASS =
  "grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5";

function SetGrid({
  children,
  sets,
}: {
  children?: ReactNode;
  sets?: SetType[];
}) {
  return (
    <div className={SET_GRID_CLASS}>
      {sets ? sets?.map((set) => <SetCard key={set.id} set={set} />) : children}
    </div>
  );
}

export default SetGrid;

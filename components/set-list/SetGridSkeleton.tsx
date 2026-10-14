import SetCardSkeleton from "@/components/set-list/SetCardSkeleton";
import { SET_GRID_CLASS } from "@/components/set-list/SetGrid";

export default function SetGridSkeleton() {
  return (
    <div className={SET_GRID_CLASS}>
      {Array.from({ length: 24 }, (_, i) => (
        <SetCardSkeleton key={i} />
      ))}
    </div>
  );
}

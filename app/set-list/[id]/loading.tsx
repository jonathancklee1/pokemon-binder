import SetHeaderSkeleton from "@/components/set-list/SetHeaderSkeleton";
import { SET_GRID_CLASS } from "@/components/set-list/SetGrid";

function Loading() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main>
        <div>
          <SetHeaderSkeleton />
          <div className="skeleton mb-5 h-10 w-full sm:w-80" />
          <div className={SET_GRID_CLASS}>
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="skeleton aspect-245/337 w-full" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Loading;

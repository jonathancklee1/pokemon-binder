import SetGridSkeleton from "@/components/set-list/SetGridSkeleton";

export default function Loading() {
  return (
    <main>
      <div>
        <div className="skeleton mb-3 h-8 w-56" />
        <div className="skeleton mb-6 h-4 w-full max-w-xl md:mb-8" />
        <SetGridSkeleton />
      </div>
    </main>
  );
}

import SetCardSkeleton from "@/components/set-list/SetCardSkeleton";

export default function SetGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {Array.from({ length: 24 }, (_, i) => (
        <SetCardSkeleton key={i} />
      ))}
    </div>
  );
}

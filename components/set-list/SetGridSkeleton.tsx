import SetCardSkeleton from "@/components/set-list/SetCardSkeleton";

export default function SetGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 24 }, (_, i) => (
        <SetCardSkeleton key={i} />
      ))}
    </div>
  );
}

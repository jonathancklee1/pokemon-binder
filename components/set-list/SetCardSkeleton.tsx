/** Placeholder card shown while set data is loading. */
function SetCardSkeleton() {
  return (
    <div className="border-line bg-surface rounded-2xl border p-2.5">
      <div className="skeleton aspect-16/10 w-full rounded-xl" />
      <div className="px-1.5 pt-3 pb-1">
        <div className="skeleton h-4 w-3/4" />
        <div className="skeleton mt-2 h-3 w-1/3" />
      </div>
    </div>
  );
}

export default SetCardSkeleton;

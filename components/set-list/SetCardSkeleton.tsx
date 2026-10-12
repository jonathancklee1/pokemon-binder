/** Placeholder card shown while set data is loading. */
function SetCardSkeleton() {
  return (
    <div className="card bg-secondary-background p-4 shadow-sm">
      <div className="skeleton aspect-square w-full" />
      <div className="card-body px-0 pt-4 pb-0">
        <div className="skeleton h-6 w-3/4" />
        <div className="skeleton h-12 w-full" />
      </div>
    </div>
  );
}

export default SetCardSkeleton;

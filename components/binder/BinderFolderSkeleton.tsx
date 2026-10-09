/** Placeholder binder pages shown while saved binders load from localStorage. */
function SkeletonPage() {
  return (
    <div className="bg-background rounded-md p-2 shadow-sm md:p-4">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index} className="skeleton aspect-63/88 rounded-none" />
        ))}
      </div>
    </div>
  );
}

function BinderFolderSkeleton() {
  return (
    <div
      className="relative mx-auto mt-4 flex max-w-375 gap-4"
      aria-busy="true"
    >
      <div className="hidden basis-[calc(50%-0.5rem)] md:block">
        <SkeletonPage />
      </div>
      <div className="basis-full md:basis-[calc(50%-0.5rem)]">
        <SkeletonPage />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="bg-base-100/80 flex items-center gap-2 rounded-full px-4 py-2 shadow-sm">
          <span className="loading loading-spinner loading-sm" />
          <span className="text-sm font-semibold">Loading binders</span>
        </div>
      </div>
    </div>
  );
}

export default BinderFolderSkeleton;

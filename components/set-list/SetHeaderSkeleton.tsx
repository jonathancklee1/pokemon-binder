import { AllSetsLink } from "./SetHeader";

/** Placeholder for SetHeader shown while a set is loading. */
function SetHeaderSkeleton() {
  return (
    <header className="mb-8">
      <AllSetsLink />

      <div className="border-line bg-surface rounded-2xl border p-4 md:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center md:gap-8">
          <div className="skeleton aspect-16/7 w-full shrink-0 rounded-xl sm:aspect-16/10 sm:w-64" />
          <div className="flex w-full flex-col gap-3">
            <div className="skeleton h-8 w-64 max-w-full" />
            <div className="skeleton h-5 w-80 max-w-full" />
          </div>
        </div>

        <div className="border-line mt-5 flex flex-wrap gap-x-12 gap-y-4 border-t pt-5">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="skeleton h-12 w-16" />
          ))}
        </div>
      </div>
    </header>
  );
}

export default SetHeaderSkeleton;

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

/** Placeholder for SetHeader shown while a set is loading. */
function SetHeaderSkeleton() {
  return (
    <header className="mb-8">
      <Link
        href="/set-list"
        className="text-secondary-text hover:text-secondary mb-4 inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="size-4" />
        All sets
      </Link>

      <div className="from-secondary-background to-primary-text rounded-2xl border border-white/10 bg-linear-to-br p-6 shadow-lg md:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="skeleton h-32 w-full max-w-xs" />

          <div className="flex w-full flex-col items-center gap-3 md:items-start">
            <div className="skeleton h-4 w-32" />
            <div className="skeleton h-9 w-64 max-w-full md:h-10" />
            <div className="skeleton h-5 w-72 max-w-full" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="skeleton h-[4.5rem] rounded-xl" />
          ))}
        </div>
      </div>
    </header>
  );
}

export default SetHeaderSkeleton;

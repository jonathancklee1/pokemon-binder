"use client";

import { useEffect } from "react";
import { TriangleAlert } from "lucide-react";

/** Error card for a failed data fetch, with a button to retry it. */
function FetchError({
  error,
  retry,
  title,
  description,
}: {
  error: Error & { digest?: string };
  retry: () => void;
  title: string;
  description: string;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="border-line bg-surface flex flex-col items-center gap-4 rounded-2xl border px-6 py-12 text-center md:py-16">
      <TriangleAlert className="text-secondary size-10" />
      <div>
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h1>
        <p className="text-muted mt-2 max-w-md text-sm">{description}</p>
      </div>
      <button
        onClick={() => retry()}
        className="bg-secondary text-primary-text flex h-10 items-center rounded-lg px-4 text-sm font-semibold transition-colors hover:bg-yellow-300"
      >
        Try again
      </button>
    </div>
  );
}

export default FetchError;

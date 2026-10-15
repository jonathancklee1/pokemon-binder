"use client";

import FetchError from "@/components/FetchError";
import { AllSetsLink } from "@/components/set-list/SetHeader";

/** Fallback shown when a set fails to load. */
function SetError(props: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main>
        <div>
          <AllSetsLink />
          <FetchError
            {...props}
            title="Couldn't load this set"
            description="Something went wrong fetching the set data. It may be a temporary problem, so try again or head back to all sets."
          />
        </div>
      </main>
    </div>
  );
}

export default SetError;

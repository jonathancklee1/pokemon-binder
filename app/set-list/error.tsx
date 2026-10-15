"use client";

import FetchError from "@/components/FetchError";

/** Fallback shown when the set list fails to load. */
function SetListError(props: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main>
        <FetchError
          {...props}
          title="Couldn't load the sets"
          description="Something went wrong fetching the list of sets. It may be a temporary problem, so try again in a moment."
        />
      </main>
    </div>
  );
}

export default SetListError;

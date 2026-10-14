import { Suspense } from "react";
import SetContainer from "@/components/set-list/SetContainer";
import SetGridSkeleton from "@/components/set-list/SetGridSkeleton";
import { getSets } from "@/lib/apis/getSets";

async function Sets() {
  const sets = await getSets();
  return <SetContainer sets={sets} />;
}

export default function SetListPage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main>
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Pokémon Sets
          </h1>
          <p className="text-muted mt-2 max-w-2xl">
            Browse all historical expansions, master sets, and track your
            personal checklist progress.
          </p>
        </div>
        <Suspense fallback={<SetGridSkeleton />}>
          <Sets />
        </Suspense>
      </main>
    </div>
  );
}

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
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div className="my-5 flex flex-col items-center justify-center text-center md:my-8 md:items-start md:text-left">
          <h1 className="text-3xl font-bold">Pokémon Sets</h1>
          <p className="text-secondary-text mt-2 mb-4 text-lg">
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

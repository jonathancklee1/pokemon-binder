import SetContainer from "@/components/set-list/SetContainer";
import { getSets } from "@/lib/apis/getSets";

export default async function SetListPage() {
  const sets = await getSets();
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
        <SetContainer sets={sets} />
      </main>
    </div>
  );
}

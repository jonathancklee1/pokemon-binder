import SearchCard from "@/components/SearchCard";
import SetGrid from "@/components/set-list/SetGrid";
import getSet from "@/lib/apis/getSet";
import { CardBriefType } from "@/lib/types";

export default async function SetIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const setData = await getSet(id);
  console.log(setData);
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div className="my-5 flex flex-col items-center justify-center text-center md:my-8 md:items-start md:text-left">
          <h1 className="text-3xl font-bold">{setData.name}</h1>
        </div>
        <SetGrid>
          {setData.cards.map((card: CardBriefType) => (
            <SearchCard key={card.id} cardData={card} />
          ))}
        </SetGrid>
      </main>
    </div>
  );
}

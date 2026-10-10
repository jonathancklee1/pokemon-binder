import SearchCard from "@/components/SearchCard";
import SetGrid from "@/components/set-list/SetGrid";
import SetHeader from "@/components/set-list/SetHeader";
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
        <SetHeader set={setData} />
        <SetGrid>
          {setData.cards.map((card: CardBriefType) => (
            <SearchCard key={card.id} cardData={card} />
          ))}
        </SetGrid>
      </main>
    </div>
  );
}

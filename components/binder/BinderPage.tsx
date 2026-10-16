import { CardBriefType } from "@/lib/types";
import PokemonCard from "../PokemonCard";
import { getPocketGridClass } from "@/lib/utils";

function BinderPage(
  {
    cardList,
    pocketSize,
  }: { cardList?: CardBriefType[]; pocketSize: 4 | 9 | 12 } = {
    cardList: [],
    pocketSize: 4,
  },
) {
  const gridColsClass = getPocketGridClass(pocketSize);
  return (
    <div className="bg-background rounded-md p-2 shadow-sm md:h-full md:p-4">
      <div className={`grid ${gridColsClass} gap-2`}>
        {cardList?.map((card, index) => (
          <PokemonCard key={index} cardData={card} slot={index} />
        ))}
      </div>
    </div>
  );
}

export default BinderPage;

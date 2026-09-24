import { CardDataType } from "@/lib/types";
import PokemonCard from "../PokemonCard";

function BinderPage(
  {
    cardList,
    pocketSize,
  }: { cardList?: CardDataType[]; pocketSize: 4 | 9 | 12 } = {
    cardList: [],
    pocketSize: 4,
  },
) {
  const gridColsClass =
    pocketSize === 4
      ? "grid-cols-2 grid-rows-2"
      : pocketSize === 9
        ? "grid-cols-3 grid-rows-3"
        : "grid-cols-4 grid-rows-3";
  return (
    <div className="bg-secondary rounded-md p-4 shadow-sm">
      <div className={`grid ${gridColsClass} gap-4`}>
        {cardList?.map((card, index) => (
          <PokemonCard key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
}

export default BinderPage;

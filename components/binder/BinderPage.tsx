import { CardDataType } from "@/lib/types";
import PokemonCard from "../PokemonCard";

function BinderPage(
  { cardList }: { cardList?: CardDataType[] } = { cardList: [] },
) {
  return (
    <div className="bg-background mt-5 rounded-md p-4 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        {cardList?.map((card, index) => (
          <PokemonCard key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
}

export default BinderPage;

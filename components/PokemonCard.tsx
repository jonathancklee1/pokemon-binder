import { CardDataType } from "@/lib/types";
import Image from "next/image";

function PokemonCard({ cardData }: { cardData: CardDataType }) {
  if (!cardData) {
    return (
      <div className="card bg-secondary-background grid place-items-center shadow-md">
        <span>Card not found</span>
      </div>
    );
  }
  return (
    <div className="card bg-secondary-background relative pt-5 shadow-md">
      <figure className="w-full">
        <Image
          src={cardData.image}
          alt="Pokemon"
          className="m-2 rounded-lg border border-gray-300"
        />
      </figure>
      <span className="badge badge-xs badge-warning absolute top-2 right-2 px-2 font-bold">
        {cardData.variant}
      </span>
      <div className="card-body flex flex-col justify-between gap-1 overflow-hidden p-2">
        <h2 className="card-title line-clamp-2 overflow-hidden text-ellipsis">
          {cardData.name}
        </h2>
        <span>{cardData.setName}</span>
      </div>
    </div>
  );
}

export default PokemonCard;

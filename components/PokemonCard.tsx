import { CardDataType } from "@/lib/types";
import Image from "next/image";

function PokemonCard({ cardData }: { cardData: CardDataType }) {
  if (!cardData) {
    return (
      <div className="card sleeve grid aspect-110/154 place-items-center rounded-none border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md"></div>
    );
  }
  return (
    <div className="card sleeve group relative overflow-hidden rounded-none border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
      <figure className="w-full">
        <Image
          src={cardData.image}
          alt="Pokemon"
          className="w-full rounded-lg"
        />
      </figure>
      <span className="badge badge-xs badge-warning absolute top-2 right-2 -translate-y-6.25 px-2 font-bold transition-transform group-hover:translate-y-0">
        {cardData.variant}
      </span>
      <div className="from-background to-background/50 absolute right-0 bottom-0 left-0 translate-y-full border-t-2 border-white/20 bg-linear-to-t to-95% transition-transform group-hover:translate-y-0">
        <div className="card-body flex flex-col justify-between gap-1 overflow-hidden p-2">
          <h2 className="card-title line-clamp-1 overflow-hidden text-sm font-bold text-ellipsis">
            {cardData.name}
          </h2>
          <span className="text-xs font-medium">{cardData.setName}</span>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

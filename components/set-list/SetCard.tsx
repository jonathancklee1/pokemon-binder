import type { SetType } from "@/lib/types";
import Image from "next/image";

function SetCard({ set }: { set: SetType }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      {!set.logo && (
        <div className="flex aspect-square h-full w-full items-center justify-center rounded-xl bg-gray-200/20 p-4">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      {set.logo && (
        <figure>
          <Image
            src={`${set.logo}.png`}
            alt={set.name}
            width={200}
            height={200}
            className="aspect-square w-full object-contain"
          />
        </figure>
      )}
      <div className="card-body flex-row items-start justify-between">
        <h2 className="card-title">{set.name}</h2>
        <span className="badge badge-primary p-2">
          {set.cardCount.total} cards
        </span>
      </div>
    </div>
  );
}

export default SetCard;

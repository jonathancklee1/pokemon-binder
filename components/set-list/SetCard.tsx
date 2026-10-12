"use client";
import type { SetType } from "@/lib/types";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function SetCard({ set }: { set: SetType }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Link
      className="card group bg-secondary-background hover:text-secondary cursor-pointer p-4 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
      href={`/set-list/${set.id}`}
    >
      {!set.logo && (
        <div className="flex aspect-square w-full items-center justify-center rounded-xl p-4">
          <span className="text-center text-gray-500">No Image Available</span>
        </div>
      )}
      {set.logo && (
        <figure className={imageLoaded ? "" : "skeleton"}>
          <Image
            src={`${set.logo}.png`}
            alt={set.name}
            width={200}
            height={200}
            onLoad={() => setImageLoaded(true)}
            className={`aspect-square w-full object-contain transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          />
        </figure>
      )}
      <div className="card-body justify-between px-0 pt-4 pb-0">
        <div className="flex flex-row items-start justify-between gap-2 font-bold">
          <h2 className="card-title text-base font-bold">{set.name}</h2>
          <span className="badge bg-secondary text-primary-text p-2">
            {set.cardCount.total} {set.cardCount.total === 1 ? "card" : "cards"}
          </span>
        </div>
        <span className="text-primary bg-background/20 cursor-pointer rounded-xl p-3 text-base font-bold transition-colors duration-300 ease-in-out">
          Browse Cards
          <MoveRight className="ml-2 inline-block h-4 w-4 transition-all group-hover:translate-x-2" />
        </span>
      </div>
    </Link>
  );
}

export default SetCard;

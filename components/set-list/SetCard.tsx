"use client";
import type { SetType } from "@/lib/types";
import { ArrowUpRight, ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/** Set logo, falling back to the set symbol, then a plain placeholder. */
function SetArtwork({ set }: { set: SetType }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const src = set.logo ?? set.symbol;

  if (!src || imageFailed) {
    return (
      <div className="text-muted absolute inset-0 flex flex-col items-center justify-center gap-2 text-xs">
        <ImageOff className="size-5" />
        No Image Available
      </div>
    );
  }
  return (
    <div className={`absolute ${set.logo ? "inset-4" : "inset-[30%]"}`}>
      <Image
        src={`${src}.png`}
        alt={set.name}
        fill
        sizes="240px"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageFailed(true)}
        className={`object-contain transition duration-300 group-hover:scale-105 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function SetCard({ set }: { set: SetType }) {
  return (
    <Link
      className="group border-line bg-surface hover:bg-raised flex flex-col rounded-2xl border p-2.5 transition-colors hover:border-white/15"
      href={`/set-list/${set.id}`}
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-white/3">
        <SetArtwork set={set} />
      </div>
      <div className="flex items-start justify-between gap-2 px-1.5 pt-3 pb-1">
        <div className="min-w-0">
          <h2 className="line-clamp-2 text-[15px] leading-snug font-semibold">
            {set.name}
          </h2>
          <p className="text-muted mt-0.5 text-sm tabular-nums">
            {set.cardCount.total} {set.cardCount.total === 1 ? "card" : "cards"}
          </p>
        </div>
        <ArrowUpRight className="text-secondary size-4 shrink-0 translate-y-0.5 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  );
}

export default SetCard;

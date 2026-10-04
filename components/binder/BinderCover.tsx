import type { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

const DEFAULT_COVER_COLOR = "var(--secondary)";

/** Shared cover surface: main colour from `--cover-color` plus a soft sheen. */
const COVER_SURFACE =
  "relative overflow-hidden bg-(--cover-color) bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]";

type CoverProps = {
  /** Main cover colour, any CSS colour value. */
  color?: string;
  className?: string;
};

const coverColorStyle = (color: string) =>
  ({ "--cover-color": color }) as CSSProperties;

/** Poke Ball emblem built from CSS shapes. */
function PokeBallEmblem() {
  return (
    <div className="shadow-inner- relative size-24 overflow-hidden rounded-full border-4 border-black md:size-32">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-red-500 to-red-600" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-white to-slate-300" />
      <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 bg-black md:h-3" />
      <div className="absolute top-1/2 left-1/2 grid size-9 -translate-1/2 place-items-center rounded-full border-4 border-black bg-white md:size-11">
        <div className="size-3 rounded-full border-2 border-slate-300 md:size-4" />
      </div>
    </div>
  );
}

function BinderCover({
  title,
  color = DEFAULT_COVER_COLOR,
  className,
}: CoverProps & { title?: string }) {
  return (
    <div
      className={twMerge(
        COVER_SURFACE,
        "rounded-l-lg rounded-r-4xl",
        className,
      )}
      style={coverColorStyle(color)}
    >
      {/* Spine */}
      <div className="absolute inset-y-0 left-0 w-6 border-r border-black/10 bg-linear-to-r from-black/40 to-black/10" />

      {/* Stitched border */}
      <div className="absolute inset-y-3 right-3 left-9 rounded-l-md rounded-r-3xl border-2 border-dashed border-black/30" />

      {/* Elastic strap */}
      <div className="absolute inset-y-0 right-10 w-3 bg-linear-to-r from-black via-zinc-800 to-black shadow-md" />

      <div className="relative flex h-full min-h-80 flex-col items-center justify-between py-10 pr-16 pl-12">
        <div></div>

        <PokeBallEmblem />

        <div className="max-w-full rounded-md bg-black/75 px-3 py-1.5 text-center shadow-sm">
          <p className="text-[9px] font-semibold tracking-[0.2em] text-white/60 uppercase">
            Collection
          </p>
          <p className="truncate text-sm font-bold text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}

export function BinderInsideCover({
  color = DEFAULT_COVER_COLOR,
  className,
}: CoverProps) {
  return (
    <div
      className={twMerge(
        COVER_SURFACE,
        "rounded-l-4xl rounded-r-lg",
        className,
      )}
      style={coverColorStyle(color)}
    >
      <div className="absolute inset-y-3 right-9 left-3 rounded-l-3xl rounded-r-md border-2 border-dashed border-black/20" />
    </div>
  );
}

export default BinderCover;

import type { SetDetailType } from "@/lib/types";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatReleaseDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function LegalBadge({ label, legal }: { label: string; legal: boolean }) {
  return (
    <span
      className={`badge badge-sm border-0 p-2 font-semibold ${legal ? "bg-emerald-500/15 text-emerald-300" : "bg-white/5 text-white/40 line-through"}`}
    >
      {label}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
      <div className="text-secondary text-2xl font-bold">{value}</div>
      <div className="text-secondary-text/70 text-xs tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

/** Hero banner for a set: logo, series, release info, legality and card counts. */
function SetHeader({ set }: { set: SetDetailType }) {
  const { cardCount } = set;
  const stats = [
    { label: "Total", value: cardCount.total },
    { label: "Official", value: cardCount.official },
    { label: "Secret", value: cardCount.total - cardCount.official },
    { label: "Normal", value: cardCount.normal },
    { label: "Holo", value: cardCount.holo },
    { label: "Reverse", value: cardCount.reverse },
    { label: "1st Edition", value: cardCount.firstEd },
  ].filter((stat) => stat.value > 0);

  return (
    <header className="mb-8">
      <Link
        href="/set-list"
        className="text-secondary-text hover:text-secondary mb-4 inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="size-4" />
        All sets
      </Link>

      <div className="from-secondary-background to-primary-text relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br p-6 shadow-lg md:p-8">
        <div className="bg-secondary/20 pointer-events-none absolute -top-24 -right-24 size-72 rounded-full blur-3xl" />

        <div className="relative flex flex-col items-center gap-6 md:flex-row md:gap-10">
          {set.logo && (
            <Image
              src={`${set.logo}.png`}
              alt={`${set.name} logo`}
              width={320}
              height={160}
              priority
              className="h-32 w-full max-w-xs object-contain drop-shadow-xl"
            />
          )}

          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <span className="text-secondary text-xs font-semibold tracking-widest uppercase">
              {set.serie.name} series
            </span>
            <h1 className="text-3xl font-bold md:text-4xl">{set.name}</h1>
            <div className="text-secondary-text flex flex-wrap items-center justify-center gap-3 text-sm md:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" />
                {formatReleaseDate(set.releaseDate)}
              </span>
              {set.abbreviation?.official && (
                <span className="badge badge-sm bg-secondary text-primary-text border-0 px-2 font-bold">
                  {set.abbreviation.official}
                </span>
              )}
              <LegalBadge label="Standard" legal={set.legal.standard} />
              <LegalBadge label="Expanded" legal={set.legal.expanded} />
            </div>
          </div>
        </div>

        <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default SetHeader;

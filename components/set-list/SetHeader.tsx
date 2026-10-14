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
      className={`rounded-md px-2 py-0.5 text-xs font-semibold ${legal ? "bg-emerald-500/15 text-emerald-300" : "text-muted bg-white/5 line-through"}`}
    >
      {label}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="text-xl font-semibold tabular-nums md:text-2xl">
        {value}
      </div>
      <div className="text-muted text-sm">{label}</div>
    </div>
  );
}

/** Back link shared by the set header and its loading skeleton. */
export function AllSetsLink() {
  return (
    <Link
      href="/set-list"
      className="text-muted mb-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white"
    >
      <ArrowLeft className="size-4" />
      All sets
    </Link>
  );
}

/** Set overview: logo, series, release info, legality and card counts. */
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
      <AllSetsLink />

      <div className="border-line bg-surface rounded-2xl border p-4 md:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center md:gap-8">
          {set.logo && (
            <div className="relative aspect-16/7 w-full shrink-0 rounded-xl bg-white/3 sm:aspect-16/10 sm:w-64">
              <Image
                src={`${set.logo}.png`}
                alt={`${set.name} logo`}
                fill
                sizes="256px"
                priority
                className="object-contain p-5"
              />
            </div>
          )}

          <div className="flex min-w-0 flex-col gap-3">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              {set.name}
            </h1>
            <div className="text-muted flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span>{set.serie.name} series</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" />
                {formatReleaseDate(set.releaseDate)}
              </span>
              {set.abbreviation?.official && (
                <span className="bg-secondary text-primary-text rounded-md px-2 py-0.5 text-xs font-bold">
                  {set.abbreviation.official}
                </span>
              )}
              <LegalBadge label="Standard" legal={set.legal.standard} />
              <LegalBadge label="Expanded" legal={set.legal.expanded} />
            </div>
          </div>
        </div>

        <div className="border-line mt-5 grid grid-cols-3 gap-x-6 gap-y-4 border-t pt-5 sm:flex sm:flex-wrap sm:gap-x-12">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default SetHeader;

"use client";
import Pokeball from "@/assets/PokeBall";
import { BookOpen, List, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Binders", icon: BookOpen },
  { href: "/set-list", label: "Set List", icon: List },
];

/** Whether a nav link matches the current route, including nested set pages. */
function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function NavBar() {
  const pathname = usePathname();
  return (
    <header className="border-line bg-ground border-b px-4 md:px-8">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        <Link
          href="/"
          className="text-secondary flex items-center gap-2 text-xl font-bold"
        >
          <Pokeball styles="w-10 h-10" />
          PokéBinder
        </Link>
        <ul className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => {
            const active = isActive(href, pathname);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    active
                      ? "bg-surface text-white"
                      : "text-muted hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`hidden size-4 sm:block ${active ? "text-secondary" : ""}`}
                  />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

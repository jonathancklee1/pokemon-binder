"use client";
import Pokeball from "@/assets/PokeBall";
import { BookOpen, List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const params = usePathname();
  return (
    <nav className="bg-base-200 w-full rounded-md px-4 shadow-sm max-lg:collapse">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar px-0">
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-ghost mr-2 px-2 md:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link
            href="/"
            className="text-secondary flex items-center gap-2 text-xl font-bold"
          >
            <Pokeball styles="w-10 h-10" />
            PokéBinder
          </Link>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal gap-3 px-1">
            <li>
              <Link
                href="/"
                className={`text-primary flex items-center gap-2 rounded-none border-b-2 px-0.5 py-1 font-medium ${params === "/" ? "text-secondary border-secondary" : "border-transparent"}`}
              >
                <BookOpen className="size-5" />
                Binders
              </Link>
            </li>
            <li>
              <Link
                href="/set-list"
                className={`text-primary flex items-center gap-2 rounded-none border-b-2 px-0.5 py-1 font-medium ${params === "/set-list" ? "text-secondary border-secondary" : "border-transparent"}`}
              >
                <List className="size-5" />
                Set List
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse-content z-1 px-0 md:hidden">
        <ul className="menu w-full gap-3">
          <li>
            <Link
              href="/"
              className={`text-primary flex items-center gap-2 rounded-none border-b-2 px-0.5 py-1 font-medium ${params === "/" ? "text-secondary border-secondary" : "border-transparent"}`}
            >
              <BookOpen className="size-5" />
              Binders
            </Link>
          </li>
          <li>
            <Link
              href="/set-list"
              className={`text-primary flex items-center gap-2 rounded-none border-b-2 px-0.5 py-1 font-medium ${params === "/set-list" ? "text-secondary border-secondary" : "border-transparent"}`}
            >
              <List className="size-5" />
              Set List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

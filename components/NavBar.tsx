"use client";
import Pokeball from "@/assets/PokeBall";
import { UserCircle, BookOpen, List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
    const params = usePathname();
    return (
        <nav className="flex items-center justify-between bg-zinc-100 p-4 dark:bg-zinc-900">
            <div className="flex items-center  gap-8">
                <div className="flex items-center  gap-8">
                    <Link
                        href="/"
                        className="text-xl font-bold text-secondary flex items-center gap-2"
                    >
                        <Pokeball styles="w-10 h-10" />
                        PokéBinder
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/binders"
                            className={`font-medium text-primary border-b-2 flex py-1 px-0.5 items-center gap-2 ${params === "/binders" ? "text-secondary  border-secondary" : " border-transparent"}`}
                        >
                            <BookOpen className="size-5 " />
                            Binders
                        </Link>
                        <Link
                            href="/set-list"
                            className={`font-medium text-primary border-b-2 flex py-1 px-0.5 items-center gap-2 ${params === "/set-list" ? "text-secondary  border-secondary" : " border-transparent"}`}
                        >
                            <List className="size-5" />
                            Set List
                        </Link>
                    </div>
                </div>
            </div>
            <UserCircle className="size-5" />
        </nav>
    );
}

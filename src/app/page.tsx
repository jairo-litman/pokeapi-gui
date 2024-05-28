import Link from "next/link";
import { Button } from "@/components/ui/button";
import Search from "@/components/search";

export default function Home() {
    return (
        <div className="flex flex-row gap-x-80 p-8 min-h-[calc(100vh-theme(spacing.header)-theme(spacing.footer))] w-full items-center justify-center">
            <div>
                <h1 className="text-8xl">PokeAPI</h1>
                <p>Welcome to the PokeAPI GUI!</p>
                <Button asChild>
                    <Link href="/list/1">Go to the Pokedex</Link>
                </Button>
            </div>
            <Search />
        </div>
    );
}

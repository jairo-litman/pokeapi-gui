import Link from "next/link";

export default function Home() {
    return (
        <div className="flex p-8 min-h-[calc(100vh-theme(spacing.header)-theme(spacing.footer))] w-full items-center justify-center">
            <div>
                <h1 className="text-8xl">PokeAPI</h1>
                <p>Welcome to the PokeAPI GUI!</p>
                <Link href="/list/1">
                    <span className="text-blue-500">Go to the Pokedex</span>
                </Link>
            </div>
        </div>
    );
}

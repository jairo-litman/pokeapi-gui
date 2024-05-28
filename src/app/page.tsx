import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the Pokeapi GUI</p>
            <Link href="/list/1">List</Link>
        </div>
    );
}

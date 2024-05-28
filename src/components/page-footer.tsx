import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex bottom-0 left-0 right-0 w-full h-footer p-4 bg-secondary items-center justify-center">
            <p className="text-white">Made by Jairo Litman</p>
            <Link className="ml-3" href="https://github.com/jairo-litman/pokeapi-gui">
                <Github size="24" />
            </Link>
        </footer>
    );
}
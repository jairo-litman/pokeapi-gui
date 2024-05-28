"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";


export default function Search() {
    const [search, setSearch] = useState<string>("");
    const { toast } = useToast();

    const handleSearch = async () => {
        if (search === "") {
            toast({ description: "Please enter a search term" });
            return;
        }

        const url = new URL("https://pokeapi.co/api/v2/pokemon/" + search);
        const response = await fetch(url);
        if (response.status === 404) {
            toast({ description: "Pokemon not found" });
            return;
        }
        if (!response.ok) {
            throw new Error("Failed to fetch Pokemon");
        }
        const pokemon = await response.json();
        window.location.href = "/pokemon/" + pokemon.id;
    }

    return (
        <div className="flex gap-x-4">
            <Input type="text" placeholder="Search for a Pokemon" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button variant={"outline"} onClick={handleSearch}>Search</Button>
        </div>
    )
}
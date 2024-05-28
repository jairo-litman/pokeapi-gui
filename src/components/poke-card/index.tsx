import Link from "next/link";
import Image from "next/image";
import { Pokemon, PokemonSpecies } from "pokenode-ts";
import pokeTypes from "@/lib/poketypes";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button";
import { Image as ImageLucide } from "lucide-react";

import Stats from "./stats";

export default function PokeCard({ pokemon, species }: { pokemon: Pokemon, species: PokemonSpecies }) {
    const name = species.names.find((name) => name.language.name === 'en')?.name;
    const sprite = pokemon.sprites.front_default;

    return (
        <Card key={pokemon.id} className="flex flex-col h-96">
            <CardHeader className="items-center">
                {sprite ? <Image src={sprite} alt={pokemon.name} height={96} width={96} /> : <ImageLucide size="96" />}
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className="pb-0 flex flex-col items-center justify-items-center">
                <div className="flex flex-row mb-4 gap-x-2 w-full items-center justify-center">
                    {pokemon.types.map(({ type: { name } }) => (
                        <Image key={name} src={pokeTypes[name]} alt={name} height={18} />
                    ))}
                </div>
                <Stats stats={pokemon.stats} />
            </CardContent>
            <CardFooter className="flex mt-auto gap-3">
                <Button asChild>
                    <Link href={`/pokemon/${pokemon.id}`}>View</Link>
                </Button>
                <Button variant={"outline"} className="ml-auto">Add to compare</Button>
            </CardFooter>
        </Card>
    )
}
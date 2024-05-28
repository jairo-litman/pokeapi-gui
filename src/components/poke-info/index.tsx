import Image from "next/image";
import { cleanFlavorText } from "@/lib/utils";
import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { Image as ImageLucide } from "lucide-react";
import pokeTypes from "@/lib/poketypes";
import pokeStats from "@/lib/pokestats";
import { Progress } from "@/components/ui/progress"

function artOrSprite(pokemon: Pokemon): [string | undefined | null, number] {
    // get the official artwork if it exists, otherwise use the front sprite
    if (pokemon.sprites.other?.["official-artwork"].front_default) {
        return [pokemon.sprites.other?.["official-artwork"].front_default, 475];
    } else {
        return [pokemon.sprites.front_default, 96];
    }
}

export default function PokeInfo({ pokemon, species }: { pokemon: Pokemon, species: PokemonSpecies }) {
    const name = species.names.find((name) => name.language.name === 'en')?.name;
    const flavor = species.flavor_text_entries.find((entry) => entry.language.name === 'en');
    const [art, artSize] = artOrSprite(pokemon);

    return (
        <div className="flex flex-row p-8 min-h-[calc(100vh-theme(spacing.header)-theme(spacing.footer))] w-full justify-center">
            <div>
                {art ? <Image src={art} alt={pokemon.name} height={artSize} width={artSize} /> : <ImageLucide size="475" />}
            </div>
            <div className="w-full">
                <h1 className="text-8xl">{name}</h1>
                <p>{flavor ? cleanFlavorText(flavor.flavor_text) : "No description"}</p>
                <div className="flex flex-row mb-4 gap-x-2 w-full">
                    {pokemon.types.map(({ type: { name } }) => (
                        <Image key={name} src={pokeTypes[name]} alt={name} height={24} />
                    ))}
                </div>
                <div className="flex flex-col w-9/12">
                    {pokemon.stats.map(({ base_stat, stat: { name } }) => (
                        <div key={name} className="flex flex-row items-center gap-x-2">
                            <span className="w-48">{pokeStats[name].name}</span>
                            <span className="w-9">{base_stat}</span>
                            <Progress value={base_stat} max={255} color={`${pokeStats[name].color}`} />
                        </div>
                    ))}
                    <span>Sum of Base Stats {pokemon.stats.map(({ base_stat }) => base_stat).reduce((a, b) => a + b, 0)}</span>
                </div>
            </div>
        </div>
    );
}
import Image from 'next/image';
import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { Image as ImageLucide } from "lucide-react";
import { cleanFlavorText } from '@/lib/utils';

function artOrSprite(pokemon: Pokemon): [string | undefined | null, number] {
    if (pokemon.sprites.other?.["official-artwork"].front_default) {
        return [pokemon.sprites.other?.["official-artwork"].front_default, 475];
    } else {
        return [pokemon.sprites.front_default, 96];
    }
}

export default async function PokemonInfo({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    const client = new PokemonClient();
    const pokemon = await client.getPokemonById(id);
    const species = await client.getPokemonSpeciesById(id);

    const name = species.names.find((name) => name.language.name === 'en')?.name;
    const flavor = species.flavor_text_entries.find((entry) => entry.language.name === 'en');
    const [art, artSize] = artOrSprite(pokemon);

    return (
        <div className="flex flex-row p-8 min-h-screen">
            <div>
                {art ? <Image src={art} alt={pokemon.name} height={artSize} width={artSize} /> : <ImageLucide size="475" />}
            </div>
            <h1 className="text-8xl">{name}</h1>
            {/* <p>{flavor ? cleanFlavorText(flavor.flavor_text) : "No description"}</p> */}
        </div>
    );
}
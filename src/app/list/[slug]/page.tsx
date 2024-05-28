import { PokemonClient } from "pokenode-ts";

import PokeCard from "@/components/poke-card";
import PokePagination from "@/components/poke-pagination";

export default async function List({ params }: { params: { slug: string } }) {
    const PAGE_SIZE = 30;

    const pageNumber = parseInt(params.slug);

    const client = new PokemonClient();
    const list = await client.listPokemonSpecies(PAGE_SIZE * (pageNumber - 1), PAGE_SIZE);
    const totalPages = Math.ceil(list.count / PAGE_SIZE);

    const pokemonsData = await Promise.all(list.results.map(async (pokemonRaw) => {
        const species = await client.getPokemonSpeciesByName(pokemonRaw.name);
        const pokemon = await client.getPokemonById(species.id);
        return { species, pokemon };
    }));

    return (
        <div className="p-8 min-h-screen">
            <PokePagination currentPage={pageNumber} totalPages={totalPages} />
            <div className="grid grid-cols-6 gap-x-8 gap-y-4 py-4 items-center justify-items-center">
                {pokemonsData.map((data) => <PokeCard key={data.pokemon.id} pokemon={data.pokemon} species={data.species} />)}
            </div>
            <PokePagination currentPage={pageNumber} totalPages={totalPages} />
        </div>
    );
}

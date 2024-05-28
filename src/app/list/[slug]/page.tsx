import { NamedAPIResourceList, Pokemon, PokemonSpecies } from "pokenode-ts";

import PokeCard from "@/components/poke-card";
import PokePagination from "@/components/poke-pagination";

const PAGE_SIZE = 30;

export default async function List({ params }: { params: { slug: string } }) {
    const pageNumber = parseInt(params.slug);

    // We're using Next.js's server-side components, so we fetch directly without React hooks or effects 

    // We could use the PokemonClient class from pokenode-ts, but I want to take advantage of Next.js's
    // built-in fetch caching and error handling. So pokenode-ts is only used for types and interfaces.

    // Construct the URL for the API request
    const url = new URL("https://pokeapi.co/api/v2/pokemon-species");
    url.searchParams.set("offset", String((pageNumber - 1) * PAGE_SIZE));
    url.searchParams.set("limit", String(PAGE_SIZE));

    // Fetch the list of Pokemon species
    const list: NamedAPIResourceList = await fetch(url).then((res) => res.json());
    // Calculate the total number of pages
    const totalPages = Math.ceil(list.count / PAGE_SIZE);

    // Fetch the data for each Pokemon species, there's not a single endpoint that returns all the data we need
    const pokemonsData = await Promise.all(list.results.map(async (rawSpecies) => {
        const species: PokemonSpecies = await fetch(rawSpecies.url).then((res) => res.json());

        const url = new URL("https://pokeapi.co/api/v2/pokemon/" + species.id);
        const pokemon: Pokemon = await fetch(url).then((res) => res.json());

        return { species, pokemon };
    }));

    return (
        <div className="p-8 min-h-[calc(100vh-theme(spacing.header)-theme(spacing.footer))]">
            <PokePagination currentPage={pageNumber} totalPages={totalPages} />
            <div className="grid grid-cols-6 gap-x-8 gap-y-4 py-4 items-center justify-items-center">
                {pokemonsData.map(({ species, pokemon }) => <PokeCard key={pokemon.id} pokemon={pokemon} species={species} />)}
            </div>
            <PokePagination currentPage={pageNumber} totalPages={totalPages} />
        </div>
    );
}
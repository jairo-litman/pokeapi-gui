import { Pokemon, PokemonSpecies } from "pokenode-ts";
import PokeInfo from "@/components/poke-info";

export default async function PokemonInfo({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    const speciesUrl = new URL("https://pokeapi.co/api/v2/pokemon-species/" + id);
    const pokemonUrl = new URL("https://pokeapi.co/api/v2/pokemon/" + id);
    const species: PokemonSpecies = await fetch(speciesUrl).then((res) => res.json());
    const pokemon: Pokemon = await fetch(pokemonUrl).then((res) => res.json());


    return <PokeInfo pokemon={pokemon} species={species} />;
}
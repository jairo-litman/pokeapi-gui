import { PokemonClient } from "pokenode-ts";
import PokeInfo from "@/components/poke-info";

export default async function PokemonInfo({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    const client = new PokemonClient();
    const pokemon = await client.getPokemonById(id);
    const species = await client.getPokemonSpeciesById(id);

    return <PokeInfo pokemon={pokemon} species={species} />;
}
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { PokemonStat } from "pokenode-ts";

const pokeStats: { [key: string]: { color: string, name: string } } = {
    "hp": {
        color: "bg-red-400",
        name: "HP",
    },
    "attack": {
        color: "bg-yellow-400",
        name: "Attack",
    },
    "defense": {
        color: "bg-green-400",
        name: "Defense",
    },
    "special-attack": {
        color: "bg-blue-400",
        name: "Special Attack",
    },
    "special-defense": {
        color: "bg-indigo-400",
        name: "Special Defense",
    },
    "speed": {
        color: "bg-purple-400",
        name: "Speed",
    },
}


export default function Stats({ stats }: { stats: PokemonStat[] }) {
    return (
        <TooltipProvider>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 items-center justify-center">
                {stats.map(({ base_stat, stat: { name } }) => (
                    <Tooltip key={name}>
                        <TooltipTrigger>
                            <span className={`${pokeStats[name].color} text-black rounded-lg p-1`}>{base_stat}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{pokeStats[name].name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
            <Tooltip>
                <TooltipTrigger className="pt-4">
                    <span>
                        {stats.map(({ base_stat }) => base_stat).reduce((a, b) => a + b, 0)}
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Sum of Base Stats</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
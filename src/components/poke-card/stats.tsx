import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { PokemonStat } from "pokenode-ts";
import pokeStats from "@/lib/pokestats";

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
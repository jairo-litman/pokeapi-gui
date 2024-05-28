import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function cleanFlavorText(text: string) {
    return text.replace(/\n|\f/g, " ").replace(/é/g, "É");
}

import { LoaderCircle } from "lucide-react"

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-full min-h-[calc(100vh-theme(spacing.header)-theme(spacing.footer))]">
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            <h1>Loading...</h1>
        </div>
    );
}
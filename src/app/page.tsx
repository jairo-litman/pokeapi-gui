import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        console.log('Home page mounted');
        return () => {
            console.log('Home page unmounted');
        }
    }, []);


    return (
        <div className="grid grid-cols-6 gap-x-8 gap-y-4 pt-8 items-center justify-items-center">
            {[...Array(20)].map((_, i) => (
                <Card key={i}>
                    <CardHeader>
                        <CardTitle>Card {i}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <button>Click me</button>
                    </CardFooter>
                </Card>
            ))}

        </div>
    );
}

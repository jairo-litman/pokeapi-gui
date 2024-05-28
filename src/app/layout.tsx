import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import Header from "@/components/page-header";
import Footer from "@/components/page-footer";

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pokeapi GUI",
    description: "Frontend for the Pokeapi",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}

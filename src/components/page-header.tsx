import Image from 'next/image';
import PokeApiLogo from '../../public/pokeapi_192_square.png';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex top-0 left-0 right-0 shadow-md p-4 h-header w-full bg-secondary items-center justify-center">
            <Link href="/">
                <Image src={PokeApiLogo} alt="PokeAPI Logo" width={192} height={192} />
            </Link>
        </header>
    );
}

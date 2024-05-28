/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'raw.githubusercontent.com',
                protocol: 'https',
                pathname: '/PokeAPI/sprites/master/sprites/pokemon/**'
            }
        ]
    }
};

export default nextConfig;

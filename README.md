## A barebones GUI for pokeAPI

This is a simple GUI for the pokeAPI. It allows you to search for a pokemon by name or show a list of all pokemon.

* The project is built using React and Next.js with server-side rendering. 
* The styling is done using Tailwind CSS. 
* The project is written in TypeScript. 
* Shadcn is used for certain components.

[Pokenode-ts](https://pokenode-ts.vercel.app/) is used for their types and interfaces for the pokeAPI. The data is fetched using the `fetch` API.

The project is deployed on Vercel and can be accessed [here](https://pokeapi-gui.vercel.app/).

## Installation

To install the required packages, run the following command:

```bash
npm install
```

## Usage

To run a development server, run the following command:

```bash
npm run dev
```

Alternatively, you can build the project and run the server with the following commands:

```bash
npm run build
npm run start
```

The server will be running on `http://localhost:3000`.

## Missing Features and Future Improvements

- Comparison of two pokemon
- Fuzzy search
- Search by other attributes (e.g. type, ability, etc.)
- Better styling
- More information about each pokemon

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 - see the LICENSE file for details
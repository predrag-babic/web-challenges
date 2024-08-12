import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={!prevPageUrl}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => setPage((nextPage) => nextPage + 1)}
        disabled={!nextPageUrl}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

import { useEffect, useState } from 'react';

const GPTpokeAPI = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10');
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error('Error al obtener la lista de Pokémon:', error);
    }
  };

  const fetchPokemonImage = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSelectedPokemon(data.sprites.front_default);
    } catch (error) {
      console.error('Error al obtener la imagen del Pokémon:', error);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const handlePokemonClick = (url) => {
    fetchPokemonImage(url);
  };

  const handleReloadClick = () => {
    fetchPokemonList();
    setSelectedPokemon(null);
  };

  return (
    <div>
     
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index} onClick={() => handlePokemonClick(pokemon.url)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
      {selectedPokemon && (
        <>
          <h2>Imagen del Pokémon</h2>
          <img src={selectedPokemon} alt="Pokemon" />
        </>
      )}
      <button onClick={handleReloadClick}>Recargar Pokemon</button>
    </div>
  );
};

export default GPTpokeAPI;


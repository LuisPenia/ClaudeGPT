import { useState, useEffect } from 'react';
import './CLAUDE.css';

function CLAUDEpokeAPI() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getRandomPokemonList();
  }, []);

  const getRandomPokemonList = async () => {
    const maxPokemonId = 905; // Número total de Pokémones en la PokeAPI (hasta la 8ª generación)
    const pokemonIds = new Set(); // Conjunto para almacenar los IDs únicos de Pokémones

    // Obtener 10 IDs únicos de Pokémones
    while (pokemonIds.size < 10) {
      const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
      pokemonIds.add(randomId);
    }

    const pokemonList = [];

    // Obtener los detalles de cada Pokémon desde la PokeAPI
    for (const pokemonId of pokemonIds) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const pokemonData = await response.json();
      pokemonList.push(pokemonData);
    }

    setPokemonList(pokemonList);
  };

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleReload = () => {
    setSelectedPokemon(null);
    getRandomPokemonList();
  };

  return (
    <div className="App">
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id} onClick={() => handlePokemonClick(pokemon)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
        </div>
      )}
      <button onClick={handleReload}>Recargar Claude</button>
    </div>
  );
}

export default CLAUDEpokeAPI;
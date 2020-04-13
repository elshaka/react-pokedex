import React from 'react';

const PokemonList = ({ pokemons }) => pokemons.map(pokemon => <div key={pokemon}>{pokemon}</div>);

export default PokemonList;

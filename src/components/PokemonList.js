import React from 'react';

const PokemonList = ({ pokemons }) => pokemons.map(({ id, name }) => <div key={id}><a href={'pokemons/' + id}>{name}</a></div>);

export default PokemonList;

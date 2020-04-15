import axios from 'axios';
import { formatPokemonList, formatPokemon } from './formatters';

const BASE_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_LIMIT = 1000;

const PokeAPI = (() => {
  const getPokemonList = () => {
    const requestUrl = `${BASE_URL}pokemon?limit=${POKEMON_LIMIT}`;
    return axios.get(requestUrl, { mode: 'cors' })
      .then(response => formatPokemonList(response.data.results));
  };
  const getPokemon = id => {
    const requestUrl = `${BASE_URL}pokemon/${id}`;
    return axios.get(requestUrl, { mode: 'cors' })
      .then(response => formatPokemon(response.data));
  };

  return { getPokemonList, getPokemon };
})();

export default PokeAPI;

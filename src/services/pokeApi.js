import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_LIMIT = 1000;
export const DEFAULT_ICON_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const pokeApi = (() => {
  const getPokemons = () => {
    const requestUrl = `${BASE_URL}pokemon?limit=${POKEMON_LIMIT}`;
    return axios.get(requestUrl, { mode: 'cors' });
  };
  const getPokemon = id => {
    const requestUrl = `${BASE_URL}pokemon/${id}`;
    return axios.get(requestUrl, { mode: 'cors' });
  };

  return { getPokemons, getPokemon };
})();

export default pokeApi;

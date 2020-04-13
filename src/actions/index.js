import axios from 'axios';

export const GET_POKEMONS_STARTED = 'GET_POKEMONS_STARTED';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';

const getPokemonsStarted = () => ({ type: GET_POKEMONS_STARTED });
const getPokemonsSuccess = pokemons => ({ type: GET_POKEMONS_SUCCESS, payload: pokemons });
const getPokemonsFailure = () => ({ type: GET_POKEMONS_FAILURE });

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokemons = () => dispatch => {
  dispatch(getPokemonsStarted());

  const requestUrl = `${BASE_URL}pokemon`;
  axios.get(requestUrl, { mode: 'cors' })
    .then(response => {
      const pokemons = response.data.results.map(({ name, url }) => {
        const id = url.match(/(\d+)\/$/)[1];
        return { id, name };
      });
      dispatch(getPokemonsSuccess(pokemons));
    })
    .catch(() => { dispatch(getPokemonsFailure()); });
};

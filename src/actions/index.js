import pokeApi, { DEFAULT_ICON_BASE_URL } from '../services/pokeApi';

export const GET_POKEMONS_STARTED = 'GET_POKEMONS_STARTED';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';
export const SET_POKEMON_FILTER = 'SET_POKEMONS_FILTER';
export const GET_POKEMON_STARTED = 'GET_POKEMON_STARTED';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';

const getPokemonsStarted = () => ({ type: GET_POKEMONS_STARTED });
const getPokemonsSuccess = pokemons => ({ type: GET_POKEMONS_SUCCESS, payload: pokemons });
const getPokemonsFailure = () => ({ type: GET_POKEMONS_FAILURE });
const getPokemonStarted = () => ({ type: GET_POKEMON_STARTED });
const getPokemonSuccess = () => ({ type: GET_POKEMON_SUCCESS });
const getPokemonFailure = () => ({ type: GET_POKEMON_FAILURE });


export const getPokemons = () => dispatch => {
  dispatch(getPokemonsStarted());

  pokeApi.getPokemons()
    .then(response => {
      const pokemons = response.data.results.map(result => {
        const id = result.url.match(/(\d+)\/$/)[1];
        return {
          id,
          iconUrl: `${DEFAULT_ICON_BASE_URL}/${id}.png`,
          name: result.name,
        };
      });
      dispatch(getPokemonsSuccess(pokemons));
    })
    .catch(() => { dispatch(getPokemonsFailure()); });
};

export const setPokemonFilter = filter => ({ type: SET_POKEMON_FILTER, payload: filter });

export const getPokemon = () => dispatch => {
  dispatch(getPokemonStarted());

  pokeApi.getPokemon()
    .then(pokemon => { dispatch(getPokemonSuccess(pokemon)); })
    .catch(() => { dispatch(getPokemonFailure()); });
};

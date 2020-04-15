import PokeAPI from '../services/PokeAPI';

export const SET_POKEMON_LIST_FILTER = 'SET_POKEMON_LIST_FILTER';
export const GET_POKEMON_LIST_STARTED = 'GET_POKEMON_LIST_STARTED';
export const GET_POKEMON_LIST_SUCCESS = 'GET_POKEMON_LIST_SUCCESS';
export const GET_POKEMON_LIST_FAILURE = 'GET_POKEMON_LIST_FAILURE';
export const GET_POKEMON_STARTED = 'GET_POKEMON_STARTED';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';

export const setPokemonListFilter = filter => ({
  type: SET_POKEMON_LIST_FILTER,
  payload: filter,
});
const getPokemonListStarted = () => ({
  type: GET_POKEMON_LIST_STARTED,
});
const getPokemonListSuccess = pokemonList => ({
  type: GET_POKEMON_LIST_SUCCESS,
  payload: pokemonList,
});
const getPokemonListFailure = () => ({
  type: GET_POKEMON_LIST_FAILURE,
});
const getPokemonStarted = () => ({
  type: GET_POKEMON_STARTED,
});
const getPokemonSuccess = pokemon => ({
  type: GET_POKEMON_SUCCESS,
  payload: pokemon,
});
const getPokemonFailure = () => ({
  type: GET_POKEMON_FAILURE,
});

export const getPokemons = () => dispatch => {
  dispatch(getPokemonListStarted());

  PokeAPI.getPokemonList()
    .then(pokemonList => {
      dispatch(getPokemonListSuccess(pokemonList));
    })
    .catch(() => { dispatch(getPokemonListFailure()); });
};

export const getPokemon = id => dispatch => {
  dispatch(getPokemonStarted());

  PokeAPI.getPokemon(id)
    .then(pokemon => { dispatch(getPokemonSuccess(pokemon)); })
    .catch(() => { dispatch(getPokemonFailure()); });
};

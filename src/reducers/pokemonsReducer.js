import { GET_POKEMONS_STARTED, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE, SET_POKEMON_FILTER } from '../actions';

const defaultState = {
  filter: '',
  loading: false,
  list: [],
  error: false,
};

const pokemonsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS_STARTED:
      return {
        ...defaultState,
        loading: true,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
        error: false,
      };
    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SET_POKEMON_FILTER:
      return {
        ...state,
        filter: payload
      }
    default:
      return state;
  }
};

export default pokemonsReducer;

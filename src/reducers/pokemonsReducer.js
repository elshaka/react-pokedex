import { GET_POKEMONS_STARTED, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE } from '../actions';

const defaultState = {
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
    default:
      return state;
  }
};

export default pokemonsReducer;

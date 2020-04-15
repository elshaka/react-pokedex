import { GET_POKEMON_STARTED, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE } from '../actions';

const defaultState = {
  loading: false,
  item: null,
  error: false,
};

const pokemonsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_POKEMON_STARTED:
      return {
        ...defaultState,
        loading: true,
      };
    case GET_POKEMON_SUCCESS:
      return {
        loading: false,
        item: payload,
        error: false,
      };
    case GET_POKEMON_FAILURE:
      return {
        ...defaultState,
        error: true,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;

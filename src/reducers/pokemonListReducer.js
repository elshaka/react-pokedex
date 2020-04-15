import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
  SET_POKEMON_LIST_FILTER,
} from '../actions';

const defaultState = {
  filter: '',
  loading: false,
  list: [],
  error: false,
};

const pokemonsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_POKEMON_LIST_STARTED:
      return {
        ...defaultState,
        loading: true,
      };
    case GET_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
        error: false,
      };
    case GET_POKEMON_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SET_POKEMON_LIST_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;

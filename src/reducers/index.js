import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;

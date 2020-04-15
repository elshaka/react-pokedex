const DEFAULT_ICON_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const formatPokemonList = data => data.map(result => {
  const id = result.url.match(/(\d+)\/$/)[1];
  return {
    id,
    iconUrl: `${DEFAULT_ICON_BASE_URL}/${id}.png`,
    name: result.name.split('-').join(' '),
  };
});

export const formatPokemon = ({ id, name, types }) => ({
  id,
  name,
  types: types.map(type => type.type.name),
});

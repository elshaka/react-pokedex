import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonListItem = ({ pokemon }) => {
  const { id, name, iconUrl } = pokemon;
  return (
    <div style={{ height: '100px' }}>
      <img src={iconUrl} alt={name} />
      <Link to={`pokemon/${id}`}>{name}</Link>
    </div>
  );
};

PokemonListItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    iconUrl: PropTypes.string,
  }).isRequired,
};

export default PokemonListItem;

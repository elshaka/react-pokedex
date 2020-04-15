import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon: { id, name, types } }) => (
  <div>
    <h2>{ name }</h2>
    <p>
      Number:
      {id}
    </p>
    <p>Type:</p>
    <ul>
      {types.map(type => <li key={type}>{type}</li>)}
    </ul>
  </div>
);

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PokemonCard;

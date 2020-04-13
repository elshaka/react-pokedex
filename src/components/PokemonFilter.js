import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPokemonFilter } from '../actions';

const PokemonFilter = ({ filter, setPokemonFilter }) => {
  const setFilterHandler = e => {
    setPokemonFilter(e.target.value);
  };
  return <input type="text" placeholder="Search" value={filter} onChange={setFilterHandler} />;
};

PokemonFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setPokemonFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ pokemons }) => ({ filter: pokemons.filter });
const mapDispatchToProps = { setPokemonFilter };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFilter);

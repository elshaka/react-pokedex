import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPokemonListFilter } from '../actions';

const PokemonListFilter = ({ filter, setPokemonListFilter }) => {
  const setFilterHandler = e => {
    setPokemonListFilter(e.target.value);
  };
  return <input type="text" placeholder="Search" value={filter} onChange={setFilterHandler} />;
};

PokemonListFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setPokemonListFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ pokemonList: { filter } }) => ({ filter });
const mapDispatchToProps = { setPokemonListFilter };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListFilter);

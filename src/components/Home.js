import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonFilter from './PokemonFilter';
import Spinner from './Spinner';
import PokemonList from './PokemonList';
import { getPokemons } from '../actions';

const Home = ({
  pokemons, loading, filter, getPokemons,
}) => {
  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const filteredPokemons = pokemons.filter(p => p.name.includes(filter));

  return (
    <div>
      <PokemonFilter />
      { loading ? <Spinner /> : <PokemonList pokemons={filteredPokemons} />}
    </div>
  );
};

Home.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  getPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = ({ pokemons }) => ({
  pokemons: pokemons.list,
  loading: pokemons.loading,
  filter: pokemons.filter,
});

const mapDispatchToProps = { getPokemons };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

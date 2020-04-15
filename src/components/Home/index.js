import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Spinner from '../Shared/Spinner';
import PokemonList from './PokemonList';
import { getPokemons } from '../../actions';

const Home = ({
  list, loading, filter, error, getPokemons,
}) => {
  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const filteredPokemons = list.filter(p => p.name.includes(filter));

  return (
    <div>
      <Filter />
      { loading ? <Spinner /> : <PokemonList pokemons={filteredPokemons} />}
    </div>
  );
};

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  getPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  pokemonList: {
    list, loading, filter, error,
  },
}) => ({
  list,
  loading,
  error,
  filter,
});

const mapDispatchToProps = { getPokemons };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

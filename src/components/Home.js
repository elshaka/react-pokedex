import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import PokemonList from './PokemonList';
import { getPokemons } from '../actions';

const Home = ({ pokemons, loading, getPokemons }) => {
  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <div>
      { loading ? <Spinner /> : <PokemonList pokemons={pokemons} />}
    </div>
  );
};

Home.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  getPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = ({ pokemons }) => ({ pokemons: pokemons.list, loading: pokemons.loading });
const mapDispatchToProps = { getPokemons };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Shared/Spinner';
import PokemonCard from './PokemonCard';
import { getPokemon } from '../../actions';

const Pokemon = ({
  loading, item, error, getPokemon, match: { params: { id } },
}) => {
  useEffect(() => {
    getPokemon(id);
  }, [getPokemon, id]);

  return <div>{ loading ? <Spinner /> : item && <PokemonCard pokemon={item} />}</div>;
};

Pokemon.propTypes = {
  loading: PropTypes.bool.isRequired,
  item: PropTypes.shape(PokemonCard.propTypes.pokemon),
  error: PropTypes.bool.isRequired,
  getPokemon: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Pokemon.defaultProps = {
  item: null,
};

const mapStateToProps = ({ pokemon: { loading, item, error } }) => ({
  loading,
  item,
  error,
});
const mapDispatchToProps = { getPokemon };

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

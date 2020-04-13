import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const PER_PAGE = 10;

const PokemonList = ({ pokemons }) => {
  const [page, setPage] = React.useState(1);
  const scrollablePokemons = pokemons.slice(0, page * PER_PAGE);

  return (
    <InfiniteScroll
      dataLength={scrollablePokemons.length}
      next={() => setPage(page + 1)}
      hasMore={scrollablePokemons.length < pokemons.length}
      loader={<h4>Loading...</h4>}
      endMessage={(
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      )}
    >
      {scrollablePokemons.map(({ id, name }) => <div style={{ height: '100px' }} key={id}><a href={`pokemon/${id}`}>{name}</a></div>)}
    </InfiniteScroll>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default PokemonList;

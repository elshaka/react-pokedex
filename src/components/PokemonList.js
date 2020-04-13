import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const PER_PAGE = 10;

const PokemonList = ({ pokemons }) => {
  const [paginator, setPaginator] = React.useState({
    page: 1,
    items: pokemons.slice(0, PER_PAGE)}
  );
  const fetchMorePokemons = () => {
    setPaginator({
      page: paginator.page + 1,
      items: pokemons.slice(0, (paginator.page + 1) * PER_PAGE)
    });
  };

  return (
    <InfiniteScroll
      dataLength={paginator.items.length}
      next={fetchMorePokemons}
      hasMore={paginator.items.length < pokemons.length}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {paginator.items.map(({ id, name }) => <div style={{height: '100px'}} key={id}><a href={`pokemon/${id}`}>{name}</a></div>)}
    </InfiniteScroll>
  );
}

export default PokemonList;

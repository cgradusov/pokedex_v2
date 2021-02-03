/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Row, Col } from 'antd';
import { fetchPokemonsLinks, fetchPokemons } from './pokeListSlice';
import PokeCard from '../../components/PokeCard';
import PokePagination from '../pokePagination/PokePagination';

const PokeList = ({
  pokeLinks, pokeList, loading, linksLoading,
  pokemonsPerPage, match, location,
}) => {
  const { num } = match.params;
  const pageNumber = Number.parseInt(num, 10);
  const dispatch = useDispatch();
  const params = new URLSearchParams(location?.search);
  const search = (params.get('search') ?? '').toLowerCase();

  useEffect(() => {
    dispatch(fetchPokemonsLinks());
  }, [dispatch]);

  useEffect(() => {
    if (pokeLinks.length > 0) {
      const limit = pokemonsPerPage * pageNumber;
      const offset = pokemonsPerPage * (pageNumber - 1);
      dispatch(fetchPokemons(pokeLinks, limit, offset, search));
    }
  }, [pokeLinks, pageNumber, pokemonsPerPage, dispatch, search]);

  const chunksPokeList = pokeList.reduce((acc, el, index) => {
    if (index % 3 === 0) {
      acc.push([]);
    }

    const lastChunkIndex = acc.length - 1;

    acc[lastChunkIndex].push(el);
    return acc;
  }, []);

  const isLoading = loading || linksLoading;

  return (
    <div style={{ minHeight: 'calc(100% - 70px - 41px - 41px)' }}>
      { chunksPokeList.length !== 0
        ? (
          <>
            (
            {chunksPokeList.map((chunk, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Row key={i} gutter={[0, 16]}>
                {
                  chunk.map((el, j) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Col key={j} span={6} offset={j % 3 === 0 ? 2 : 1} flex>
                      <PokeCard
                        key={el.id}
                        num={`${el.id}`}
                        name={el.name}
                        specs={el.specs}
                        types={el.types}
                        loading={isLoading}
                      />
                    </Col>
                  ))
                  }
              </Row>
            ))}
            )
            <PokePagination match={match} search={search} />
          </>
        ) : (
          <Row gutter={[0, 16]} justify="center">
            <h1>{search === '' ? 'Loading...' : 'Not Found'}</h1>
          </Row>
        )}
    </div>
  );
};

const mapState = (state) => ({
  pokeLinks: state.pokeList.pokemonsLinks,
  pokeList: state.pokeList.pokemonsList,
  loading: state.pokeList.loading,
  linksLoading: state.pokeList.linksLoading,
  pokemonsPerPage: state.pokePagination.pokemonsPerPage,
});

export default connect(mapState, null)(PokeList);

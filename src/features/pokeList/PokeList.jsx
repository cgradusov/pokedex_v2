/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Row, Col } from 'antd';
import { fetchPokemonsLinks, fetchPokemons } from './pokeListSlice';
import { changePageNumber } from '../pokePagination/pokePaginationSlice';
import PokeCard from '../../components/PokeCard';

const PokeList = ({
  pokeLinks, pokeList, loading, linksLoading, limit, offset, pageNumber, filter,
  pokemonsPerPage,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsLinks());
  }, []);

  useEffect(() => {
    dispatch(changePageNumber(1));
    dispatch(fetchPokemons(pokeLinks, pokemonsPerPage, 0, filter));
  }, [filter]);

  useEffect(() => {
    dispatch(fetchPokemons(pokeLinks, limit, offset, filter));
  }, [pokeLinks, pageNumber]);

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
      {
                chunksPokeList.map((chunk, i) => (
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
                ))
            }
    </div>
  );
};

const mapState = (state) => ({
  pokeLinks: state.pokeList.pokemonsLinks,
  pokeList: state.pokeList.pokemonsList,
  loading: state.pokeList.loading,
  linksLoading: state.pokeList.linksLoading,

  limit: state.pokePagination.limit,
  offset: state.pokePagination.offset,
  pageNumber: state.pokePagination.pageNumber,
  pokemonsPerPage: state.pokePagination.pokemonsPerPage,

  filter: state.pokeSearch.filter,
});

export default connect(mapState, null)(PokeList);

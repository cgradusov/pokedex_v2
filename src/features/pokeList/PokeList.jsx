/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Row, Col } from 'antd';
import { fetchPokemons } from './pokeListSlice';
import PokeCard from '../../components/PokeCard';

const PokeList = ({ pokeList, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const chunksPokeList = pokeList.reduce((acc, el, index) => {
    if (index % 3 === 0) {
      acc.push([]);
    }

    const lastChunkIndex = acc.length - 1;

    acc[lastChunkIndex].push(el);
    return acc;
  }, []);

  return (
    <>
      {
                chunksPokeList.map((chunk, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Row key={i} gutter={[16, 16]}>
                    {
                            chunk.map((el, j) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <Col key={j} span={6} offset={j % 3 === 0 ? 2 : 1}>
                                <PokeCard
                                  key={el.id}
                                  num={`${el.id}`}
                                  name={el.name}
                                  specs={el.specs}
                                  types={el.types}
                                  loading={loading}
                                />
                              </Col>
                            ))
                        }
                  </Row>
                ))
            }
    </>
  );
};

const mapState = (state) => ({
  pokeList: state.pokeList.pokemonsList,
  loading: state.pokeList.loading,
});

export default connect(mapState, null)(PokeList);

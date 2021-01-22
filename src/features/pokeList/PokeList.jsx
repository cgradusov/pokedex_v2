/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Row, Col, Pagination } from 'antd';
import { fetchPokemons, changePageNumber } from './pokeListSlice';
import PokeCard from '../../components/PokeCard';

const PokeList = ({
  pokeList, loading, limit, offset, count, pageNumber,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(limit, offset));
  }, [pageNumber]);

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
                                  loading={loading}
                                />
                              </Col>
                            ))
                        }
                  </Row>
                ))
            }
      <Row gutter={[0, 16]} justify="center">
        <Col style={{ margin: '15px 0' }}>
          <Pagination
            current={pageNumber}
            total={count}
            onChange={(number) => dispatch(changePageNumber(number))}
            defaultPageSize={limit}
            showSizeChanger={false}
          />
        </Col>
      </Row>
    </>
  );
};

const mapState = (state) => ({
  pokeList: state.pokeList.pokemonsList,
  loading: state.pokeList.loading,
  limit: state.pokeList.limit,
  offset: state.pokeList.offset,
  count: state.pokeList.count,
  pageNumber: state.pokeList.pageNumber,
});

export default connect(mapState, null)(PokeList);

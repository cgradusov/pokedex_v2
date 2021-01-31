/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { Row, Col, Pagination } from 'antd';
import { changePageNumber } from './pokePaginationSlice';

const PokePagination = ({
  pokeList, pageNumber, count, pokemonsPerPage,
}) => {
  const dispatch = useDispatch();

  return (
    <Row gutter={[0, 16]} justify="center">
      <Col style={{ margin: '15px 0' }}>
        {pokeList.length !== 0
          ? (
            <Pagination
              current={pageNumber}
              total={count}
              onChange={(number) => dispatch(changePageNumber(number))}
              defaultPageSize={pokemonsPerPage}
              showSizeChanger={false}
            />
          )
          : <div />}
      </Col>
    </Row>
  );
};

const mapState = (state) => ({
  pokeList: state.pokeList.pokemonsList,
  count: state.pokeList.count,

  pageNumber: state.pokePagination.pageNumber,
  pokemonsPerPage: state.pokePagination.pokemonsPerPage,
});

export default connect(mapState, null)(PokePagination);

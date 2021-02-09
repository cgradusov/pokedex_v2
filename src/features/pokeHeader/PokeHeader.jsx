/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Divider from 'antd/lib/divider';
import { useDispatch, connect } from 'react-redux';
import { push } from 'connected-react-router';
import PokeSearch from '../pokeSearch/PokeSearch';
import PokeTypesFilter from '../pokeTypesFilter/PokeTypesFilter';
import PokeSearchButton from '../../components/PokeSearchButton';

const PokeHeader = ({
  query, search, searchIsValid, filters,
}) => {
  const dispatch = useDispatch();

  const onClick = (value) => {
    const newSearch = value ?? search;

    if (searchIsValid) {
      const queryParams = new URLSearchParams(query);

      if (newSearch === '') {
        queryParams.delete('search');
      } else {
        queryParams.set('search', newSearch);
      }

      const selectedTypes = Object.keys(filters);

      if (selectedTypes.length === 0) {
        queryParams.delete('filters');
      } else {
        queryParams.set('filters', selectedTypes.join('-'));
      }

      dispatch(push(`/1?${queryParams}`));
    }
  };

  return (
    <>
      <Row justify="space-around" align="top" style={{ margin: '15px 0 0 0' }}>
        <Col span={6}>
          <h2>Pokedex</h2>
        </Col>
        <Col span={8} style={{ maxHeight: '56px' }}>
          <PokeSearch onClick={onClick} />
        </Col>
      </Row>
      <Row justify="space-around">
        <Col>
          <PokeTypesFilter />
        </Col>
        <Col align="bottom">
          <PokeSearchButton onClick={onClick} />
        </Col>
      </Row>
      <Divider orientation="left" style={{ margin: '12px 0 24px 0' }} />
    </>
  );
};

const mapState = (state) => ({
  query: state.router.location.query,
  search: state.pokeSearch.search,
  searchIsValid: state.pokeSearch.isValid,
  filters: state.pokeFilter.filters,
});

export default connect(mapState, null)(PokeHeader);

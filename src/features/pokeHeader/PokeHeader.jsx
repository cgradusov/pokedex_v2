/* eslint-disable react/jsx-props-no-spreading */
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

const headingColProps = {
  xs: { order: 1, span: 15, offset: 9 },
  sm: { order: 1, span: 14, offset: 10 },
  md: { order: 0, span: 13, offset: 11 },
  lg: { order: 0, span: 11, offset: 1 },
  xl: { order: 0, span: 24, offset: 0 },
  xxl: { order: 0, span: 24, offset: 0 },
};

const filterColProps = {
  xs: { order: 3, span: 24, offset: 0 },
  sm: { order: 3, span: 20, offset: 2 },
  md: { order: 0, span: 22, offset: 2 },
  lg: { order: 0, span: 9, offset: 2 },
  xl: { order: 0, span: 24, offset: 0 },
  xxl: { order: 0, span: 24, offset: 0 },
};

const searchColProps = {
  xs: { order: 2, span: 24, offset: 0 },
  sm: { order: 2, span: 24, offset: 0 },
  md: { order: 0, span: 18, offset: 0 },
  lg: { order: 0, span: 7, offset: 15 },
  xl: { order: 0, span: 22, offset: 0 },
  xxl: { order: 0, span: 22, offset: 0 },
};

const searchButtonColProps = {
  xs: { order: 4, span: 24, offset: 0 },
  sm: { order: 4, span: 24, offset: 0 },
  md: { order: 0, span: 6, offset: 0 },
  lg: { order: 0, span: 2, offset: 0 },
  xl: { order: 0, span: 2, offset: 0 },
  xxl: { order: 0, span: 2, offset: 0 },
};

const gutterY = {
  xs: 16,
  sm: 16,
  md: 16,
  lg: 16,
  xl: 10,
  xxl: 10,
};

const PokeHeader = ({
  location, search, searchIsValid, filters,
}) => {
  const dispatch = useDispatch();
  const { query } = location;

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

      dispatch(push({
        pathname: '/1',
        search: `${queryParams}`,
        state: {
          from: location.pathname,
        },
      }));
    }
  };

  return (
    <div style={{ margin: '10px 15px' }}>
      <Row justify="space-between" align="top" gutter={[0, gutterY]}>
        {/* justify="space-around" align="center" style={{ margin: '15px 25px' }} */}
        <Col {...headingColProps}><h1>Pokedex</h1></Col>
        <Col {...filterColProps}>
          <PokeTypesFilter />
        </Col>
        <Col {...searchColProps} style={{ maxHeight: '56px', minWidth: '200px' }}>
          <PokeSearch onClick={onClick} />
        </Col>
        <Col {...searchButtonColProps}>
          <PokeSearchButton onClick={onClick} />
        </Col>
      </Row>
      <Divider orientation="left" style={{ margin: '12px 0 24px 0' }} />
    </div>
  );
};

const mapState = (state) => ({
  location: state.router.location,
  search: state.pokeSearch.search,
  searchIsValid: state.pokeSearch.isValid,
  filters: state.pokeFilter.filters,
});

export default connect(mapState, null)(PokeHeader);

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Divider from 'antd/lib/divider';
import PokeSearch from '../pokeSearch/PokeSearch';
import PokeTypesFilter from '../../components/PokeTypesFilter';

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
  md: { order: 0, span: 24, offset: 0 },
  lg: { order: 0, span: 24, offset: 15 },
  xl: { order: 0, span: 24, offset: 0 },
  xxl: { order: 0, span: 24, offset: 0 },
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
  types,
}) => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = Object.fromEntries(searchParams.entries());

  const searchValue = (query.search ?? '').toLowerCase();
  const filtersValue = (query.filters ?? '').toLowerCase();

  const initialStateFilters = filtersValue
    .split('-')
    .reduce((acc, f) => {
      if (f !== '') {
        acc[f] = true;
      }
      return acc;
    }, {});
  const [filters, setFilters] = useState(initialStateFilters);

  const [search, setSearch] = useState({
    value: searchValue,
    isValid: true,
  });

  const onClick = () => {
    const queryParams = new URLSearchParams(query);

    if (search.isValid) {
      if (search.value === '') {
        queryParams.delete('search');
      } else {
        queryParams.set('search', search.value);
      }
    }

    const selectedTypes = Object
      .entries(filters)
      .reduce((acc, [k, v]) => (v ? [...acc, k] : acc), []);

    if (selectedTypes.length === 0) {
      queryParams.delete('filters');
    } else {
      queryParams.set('filters', selectedTypes.join('-'));
    }

    history.push({
      pathname: '/1',
      search: `${queryParams}`,
      state: {
        from: location.pathname,
      },
    });
  };

  useEffect(() => {
    onClick();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, search]);

  const toggleFilter = (type) => {
    if (typeof filters[type] === 'undefined') {
      setFilters({ ...filters, [type]: true });
    } else {
      setFilters({ ...filters, [type]: undefined });
    }
  };

  return (
    <div style={{ margin: '10px 15px' }}>
      <Row justify="space-between" align="top" gutter={[0, gutterY]}>
        <Col {...headingColProps}>
          <Link to="/">
            <h1>Pokedex</h1>
          </Link>
        </Col>
        <Col {...filterColProps}>
          <PokeTypesFilter types={types} filters={filters} toggleFilter={toggleFilter} />
        </Col>
        <Col {...searchColProps} style={{ maxHeight: '56px', minWidth: '200px' }}>
          <PokeSearch onClick={onClick} search={search} setSearch={setSearch} />
        </Col>
      </Row>
      <Divider orientation="left" style={{ margin: '12px 0 24px 0' }} />
    </div>
  );
};

export default PokeHeader;

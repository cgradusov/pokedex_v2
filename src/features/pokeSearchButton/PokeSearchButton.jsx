/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, connect } from 'react-redux';
import { push } from 'connected-react-router';

const PokeSearchButton = ({
  query, search, searchIsValid, filters,
}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    if (searchIsValid) {
      const queryParams = new URLSearchParams(query);

      if (search === '') {
        queryParams.delete('search');
      } else {
        queryParams.set('search', search);
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
    <Button type="primary" onClick={onClick} style={{ height: '100%' }}>
      <SearchOutlined />
    </Button>
  );
};

const mapState = (state) => ({
  query: state.router.location.query,
  search: state.pokeSearch.search,
  searchIsValid: state.pokeSearch.isValid,
  filters: state.pokeFilter.filters,
});

export default connect(mapState, null)(PokeSearchButton);

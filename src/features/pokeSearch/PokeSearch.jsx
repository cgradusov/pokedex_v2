/* eslint-disable react/prop-types */
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { setFilter } from './pokeSearchSlice';

const { Search } = Input;

const PokeSearch = () => {
  const dispatch = useDispatch();

  return (
    <Search placeholder="Name or number" allowClear onSearch={(value) => dispatch(setFilter(value))} enterButton />
  );
};

const mapProps = (state) => ({
  filter: state.pokeSearch.filter,
});

export default connect(mapProps, null)(PokeSearch);

/* eslint-disable react/prop-types */
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { setFilter } from './pokeSearchSlice';

const { Search } = Input;

const PokeSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSearch = (value) => {
    dispatch(setFilter(value));
    history.push('/1');
  };

  return (
    <Search placeholder="Name or number" allowClear onSearch={onSearch} enterButton />
  );
};

const mapProps = (state) => ({
  filter: state.pokeSearch.filter,
});

export default connect(mapProps, null)(PokeSearch);

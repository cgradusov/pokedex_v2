/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

const PokeSearch = ({ location }) => {
  const history = useHistory();
  const params = new URLSearchParams(location?.search);
  const filter = params.get('filter') ?? '';

  const onSearch = (value) => {
    history.push(value === '' ? '/1' : `/1?filter=${value}`);
  };

  return (
    <Search placeholder="Name or number" defaultValue={filter} allowClear onSearch={onSearch} enterButton />
  );
};

export default PokeSearch;

/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

const { Search } = Input;

const PokeSearch = ({ location }) => {
  const history = useHistory();
  const { filter } = queryString.parse(location?.search || '?filter=');

  return (
    <Search placeholder="Name or number" defaultValue={filter} allowClear onSearch={(value) => history.push(value === '' ? '/1' : `/1?filter=${value}`)} enterButton />
  );
};

export default PokeSearch;

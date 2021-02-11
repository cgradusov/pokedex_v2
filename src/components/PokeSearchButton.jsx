/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'antd/lib/button';
import { SearchOutlined } from '@ant-design/icons';

const PokeSearchButton = ({ onClick }) => (
  <Button type="primary" onClick={() => onClick()} style={{ width: '100%' }}>
    <SearchOutlined />
  </Button>
);

export default PokeSearchButton;

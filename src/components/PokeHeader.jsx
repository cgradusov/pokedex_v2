/* eslint-disable react/prop-types */
import React from 'react';
import {
  Row, Col, Divider,
} from 'antd';

import PokeSearch from '../features/pokeSearch/PokeSearch';

const PokeHeader = () => (
  <>
    <Row justify="space-around" align="top" style={{ margin: '15px 0 0 0' }}>
      <Col span={6}>
        <h2>Pokedex</h2>
      </Col>
      <Col span={8} style={{ maxHeight: '56px' }}>
        <PokeSearch />
      </Col>
    </Row>
    <Divider orientation="left" style={{ margin: '12px 0' }} />
  </>
);

export default PokeHeader;

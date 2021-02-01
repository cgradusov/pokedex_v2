/* eslint-disable react/prop-types */
import React from 'react';
import {
  Row, Col, Divider,
} from 'antd';

import PokeSearch from './PokeSearch';

const PokeHeader = ({ location }) => (
  <>
    <Row justify="space-around" align="bottom">
      <Col span={6}>
        <h2 style={{ margin: '0.5rem 0 0 0' }}>Pokedex</h2>
      </Col>
      <Col span={6}>
        <PokeSearch location={location} />
      </Col>
    </Row>
    <Divider orientation="left" />
  </>
);

export default PokeHeader;

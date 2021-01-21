import React from 'react';
import {
  Input, Row, Col, Divider,
} from 'antd';

const { Search } = Input;

const PokeHeader = () => (
  <>
    <Row justify="space-around" align="bottom">
      <Col span={6}>
        <h2 style={{ margin: '0.5rem 0 0 0' }}>Pokedex</h2>
      </Col>
      <Col span={6}>
        <Search placeholder="Name or number" onSearch={{}} enterButton />
      </Col>
    </Row>
    <Divider orientation="left" />
  </>
);

export default PokeHeader;

/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PokeTag from './pokeTag/PokeTag';

const responsiveColProps = {
  xs: { span: 4 },
  sm: { span: 4 },
  md: { span: 4 },
  lg: { span: 4 },
  xl: { span: 1 },
  xxl: { span: 1 },
};

const PokeTypesFilter = ({
  toggleFilter, types = [], filters = [],
}) => (
  <Row justify="space-between" gutter={[0, 10]}>
    {types.map((el) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Col key={el} {...responsiveColProps}>
        <PokeTag key={el} type={el} toggleFilter={toggleFilter} filters={filters} />
      </Col>
    ))}
  </Row>
);

export default PokeTypesFilter;

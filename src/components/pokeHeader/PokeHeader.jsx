/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';
import { Link } from 'react-router-dom';
import PokeSearch from '../../features/pokeSearch/PokeSearch';
import PokeTypesFilter from '../PokeTypesFilter';
import PokeCacheButton from '../pokeCacheButton/PokeCacheButton';
import './PokeHeader.css';

const { Title } = Typography;

const headingColProps = {
  xs: { order: 1, span: 24, offset: 0 },
  sm: { order: 1, span: 14, offset: 10 },
  md: { order: 0, span: 13, offset: 11 },
  lg: { order: 0, span: 23, offset: 1 },
  xl: { order: 0, span: 24, offset: 0 },
  xxl: { order: 0, span: 24, offset: 0 },
};

const filterColProps = {
  xs: { order: 3, span: 24, offset: 0 },
  sm: { order: 3, span: 20, offset: 2 },
  md: { order: 0, span: 22, offset: 2 },
  lg: { order: 0, span: 24, offset: 1 },
  xl: { order: 0, span: 24, offset: 0 },
  xxl: { order: 0, span: 24, offset: 0 },
};

const searchColProps = {
  xs: { order: 2, span: 24, offset: 0 },
  sm: { order: 2, span: 24, offset: 0 },
  md: { order: 0, span: 24, offset: 0 },
  lg: { order: 0, span: 23, offset: 1 },
  xl: { order: 0, span: 24, offset: 0 },
  xxl: { order: 0, span: 24, offset: 0 },
};

const gutterY = {
  xs: 16,
  sm: 16,
  md: 16,
  lg: 16,
  xl: 10,
  xxl: 10,
};

const CustomTitle = ({ children }) => <Title className="custom-title" level={3}>{children}</Title>;

const PokeHeader = ({
  types = [], search, setSearch, filters, toggleFilter,
}) => (
  <div className="header">
    <Row justify="space-between" align="top" gutter={[0, gutterY]}>
      <Col {...headingColProps}>
        <Row align="middle" justify="space-between">
          <Col>
            <Link to="/" component={CustomTitle}>
              Pokedex
            </Link>
          </Col>
          { window.navigator.standalone
            ? (
              <Col>
                <PokeCacheButton />
              </Col>
            )
            : null}
        </Row>
      </Col>
      <Col {...searchColProps} className="header-search">
        <PokeSearch search={search} setSearch={setSearch} />
      </Col>
      <Col {...filterColProps}>
        <PokeTypesFilter types={types} filters={filters} toggleFilter={toggleFilter} />
      </Col>
    </Row>
  </div>
);

export default PokeHeader;

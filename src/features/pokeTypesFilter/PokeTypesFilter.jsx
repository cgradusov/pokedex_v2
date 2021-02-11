/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PokeTag from '../../components/PokeTag';
import {
  fetchPokemonsTypes, fetchPokemonsLinksByTypes, compilePokemonsLinks, updateFilters,
} from './pokeTypesFilterSlice';

const responsiveColProps = {
  xs: { span: 4 },
  sm: { span: 4 },
  md: { span: 4 },
  lg: { span: 4 },
  xl: { span: 1 },
  xxl: { span: 1 },
};

const PokeTypesFilter = ({ types, query, pokemons }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateFilters(query.filters ?? ''));
  }, [dispatch, query]);

  useEffect(() => {
    dispatch(fetchPokemonsLinksByTypes(types));
  }, [dispatch, types]);

  useEffect(() => {
    dispatch(compilePokemonsLinks());
  }, [dispatch, pokemons]);

  return (
    <Row justify="space-between" gutter={[0, 10]}>
      {types.map((el) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Col key={el} {...responsiveColProps}>
          <PokeTag key={el} type={el} width="60px" />
        </Col>
      ))}
    </Row>
  );
};

const mapState = (state) => ({
  types: state.pokeFilter.types,
  pokemons: state.pokeFilter.pokemons,
  query: state.router.location.query,
});

export default connect(mapState, null)(PokeTypesFilter);

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Row, Col } from 'antd';
import PokeTag from '../../components/PokeTag';
import PokeSearchButton from '../pokeSearchButton/PokeSearchButton';
import {
  fetchPokemonsTypes, fetchPokemonsLinksByTypes, compilePokemonsLinks, updateFilters,
} from './pokeTypesFilterSlice';
import { makeChunks } from '../../utils/arrayUtils';

const PokeTypesFilter = ({
  types, query, pokemons,
}) => {
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

  const chunksPokeTypes = makeChunks(types, 9);

  return (
    <Row justify="space-around">
      <Col>
        {chunksPokeTypes.map((t, i) => (
        // eslint-disable-next-line react/no-array-index-key
          <Row key={i} style={{ marginBottom: i === 0 ? '10px' : 0 }}>
            {t.map((el) => (<PokeTag key={el} type={el} width="60px" />))}
          </Row>
        ))}
      </Col>
      <Col align="bottom">
        <PokeSearchButton />
      </Col>
    </Row>
  );
};

const mapState = (state) => ({
  types: state.pokeFilter.types,
  pokemons: state.pokeFilter.pokemons,
  query: state.router.location.query,
});

export default connect(mapState, null)(PokeTypesFilter);

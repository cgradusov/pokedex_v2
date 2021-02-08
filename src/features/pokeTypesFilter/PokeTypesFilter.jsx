/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Button, Row, Col } from 'antd';
import { push } from 'connected-react-router';
import PokeTag from '../../components/PokeTag';
import { fetchPokemonsTypes, fetchPokemonsLinksByTypes, compilePokemonsLinks } from './pokeTypesFilterSlice';
import { makeChunks } from '../../utils/arrayUtils';

const PokeTypesFilter = ({
  types, query, filters, pokemons,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPokemonsLinksByTypes(types));
  }, [dispatch, types]);

  useEffect(() => {
    dispatch(compilePokemonsLinks());
  }, [dispatch, pokemons]);

  const onClick = () => {
    const searchParams = new URLSearchParams(query);
    const selectedTypes = Object.keys(filters);

    if (selectedTypes.length === 0) {
      searchParams.delete('filters');
    } else {
      searchParams.set('filters', selectedTypes.join('-'));
    }

    dispatch(push(`/1?${searchParams}`));
  };

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
        <Button type="primary" onClick={onClick} style={{ height: '100%' }}>Filter</Button>
      </Col>
    </Row>
  );
};

const mapState = (state) => ({
  types: state.pokeFilter.types,
  filters: state.pokeFilter.filters,
  count: state.pokeFilter.count,
  pokemons: state.pokeFilter.pokemons,

  query: state.router.location.query,
});

export default connect(mapState, null)(PokeTypesFilter);

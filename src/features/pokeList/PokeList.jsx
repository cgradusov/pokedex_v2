/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { fetchPokemons } from './pokeListSlice';
import PokeCard from '../../components/PokeCard';
import PokePagination from '../pokePagination/PokePagination';

const containerStyle = {
  minHeight: 'calc(100% - 70px - 41px - 41px)',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '16px',
  marginTop: '16px',
};

const responsiveColProps = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 8 },
  lg: { span: 6 },
  xl: { span: 6 },
  xxl: { span: 4 },
};

const PokeList = ({
  pokeLinks, pokeList, loading,
  pokemonsPerPage, match, query,
}) => {
  const { num } = match.params;
  const pageNumber = Number.parseInt(num, 10);
  const dispatch = useDispatch();
  const search = (query.search ?? '').toLowerCase();
  const filters = (query.filters ?? '').toLowerCase();

  useEffect(() => {
    if (pokeLinks.length > 0) {
      const limit = pokemonsPerPage * pageNumber;
      const offset = pokemonsPerPage * (pageNumber - 1);
      dispatch(fetchPokemons(pokeLinks, limit, offset, search, filters));
    }
  }, [pokeLinks, pageNumber, pokemonsPerPage, dispatch, search, filters]);

  return (
    <div style={containerStyle}>
      { pokeList.length !== 0
        ? (
          <>
            <Row gutter={[0, 16]}>
              {pokeList.map((el, j) => (
                <Col
                  // eslint-disable-next-line react/no-array-index-key
                  key={j}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...responsiveColProps}
                >
                  <PokeCard
                    key={el.id}
                    num={`${el.id}`}
                    name={el.name}
                    specs={el.specs}
                    types={el.types}
                    loading={loading}
                  />
                </Col>
              ))}
            </Row>
            <Row justify="center">
              <PokePagination match={match} search={search} />
            </Row>
          </>
        ) : (
          <Row gutter={[0, 16]} justify="center">
            <h1>Not Found</h1>
          </Row>
        )}
    </div>
  );
};

const mapState = (state) => ({
  pokeLinks: state.pokeFilter.pokemonsLinks,
  pokeList: state.pokeList.pokemonsList,
  loading: state.pokeList.loading,
  pokemonsPerPage: state.pokePagination.pokemonsPerPage,
  query: state.router.location.query,
});

export default connect(mapState, null)(PokeList);

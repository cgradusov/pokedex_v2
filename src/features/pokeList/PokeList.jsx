/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { useParams, useLocation } from 'react-router-dom';
import PokeCard from '../../components/PokeCard';
import PokePagination from '../pokePagination/PokePagination';
import { formatNumber } from '../../utils/stringUtils';

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

const pokeFilter = (filters) => ([, el]) => filters.split('-').every((t) => el.types.includes(t));

const pokeSearch = (search) => {
  if (!Number.isNaN(search) && !Number.isNaN(parseFloat(search))) {
    return ([, el]) => formatNumber(el.id).includes(search);
  }

  return ([, el]) => el.name.includes(search);
};

const PokeList = ({
  pokemons, perPage, loading,
}) => {
  const params = useParams();
  const pageNumber = Number.parseInt(params.num, 10);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = Object.fromEntries(searchParams.entries());

  const search = (query.search ?? '').toLowerCase();
  const filters = (query.filters ?? '').toLowerCase();

  const pokeList = Object.entries(pokemons);
  const searchedPokeList = search !== '' ? pokeList.filter(pokeSearch(search)) : pokeList;
  const filteredPokeList = filters !== '' ? searchedPokeList.filter(pokeFilter(filters)) : searchedPokeList;

  const pokeListPage = filteredPokeList.slice(
    (pageNumber - 1) * perPage,
    pageNumber * perPage,
  );

  return (
    <div style={containerStyle}>
      { pokeListPage.length !== 0
        ? (
          <>
            <Row gutter={[0, 16]}>
              {pokeListPage.map(([name, el]) => (
                <Col
                  key={name}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...responsiveColProps}
                >
                  <PokeCard
                    key={el.id}
                    num={`${el.id}`}
                    name={name}
                    desc={el.desc}
                    types={el.types}
                    loading={loading}
                  />
                </Col>
              ))}
            </Row>
            <Row justify="center" style={{ marginTop: '10px' }}>
              <Col>
                <PokePagination
                  searchParams={searchParams}
                  count={filteredPokeList.length}
                  pokemonsPerPage={perPage}
                />
              </Col>
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

export default PokeList;

/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import PokeCard from '../../features/pokeCard/PokeCard';
import PokePagination from '../pokePagination/PokePagination';
import { formatNumber } from '../../utils/stringUtils';
import './PokeList.css';

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
  pokemons = {}, perPage = 0, loading = true,
  toggleFilter, filters, searchValue = '', filtersValue = '', pageNumber, searchParams,
}) => {
  const pokeList = Object.entries(pokemons);
  const searchedPokeList = searchValue !== '' ? pokeList.filter(pokeSearch(searchValue)) : pokeList;
  const filteredPokeList = filtersValue !== '' ? searchedPokeList.filter(pokeFilter(filtersValue)) : searchedPokeList;

  const pokeListPage = filteredPokeList.slice(
    (pageNumber - 1) * perPage,
    pageNumber * perPage,
  );

  return (
    <div className="pokelist">
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
                    toggleFilter={toggleFilter}
                    filters={filters}
                  />
                </Col>
              ))}
            </Row>
            <Row justify="center" className="pokelist-pagination">
              <Col>
                <PokePagination
                  searchParams={searchParams}
                  pageNumber={pageNumber}
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

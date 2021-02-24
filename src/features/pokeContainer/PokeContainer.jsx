/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import PokeHeader from '../../components/pokeHeader/PokeHeader';
import PokeList from '../../components/pokeList/PokeList';

const PokeContainer = ({
  types, pokemons, perPage, loading,
}) => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const pageNumber = Number.parseInt(params.num, 10);

  const searchParams = new URLSearchParams(location.search);
  const query = Object.fromEntries(searchParams.entries());

  const searchValue = (query.search ?? '').toLowerCase();
  const filtersValue = (query.filters ?? '').toLowerCase();

  const initialStateFilters = filtersValue
    .split('-')
    .reduce((acc, f) => {
      if (f !== '') {
        acc[f] = true;
      }
      return acc;
    }, {});
  const initialStateSeach = {
    value: searchValue,
    isValid: true,
  };

  const [filters, setFilters] = useState(initialStateFilters);
  const [search, setSearch] = useState(initialStateSeach);

  useEffect(() => {
    setFilters(initialStateFilters);
    setSearch(initialStateSeach);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const onClick = () => {
    const queryParams = new URLSearchParams(query);

    if (search.isValid) {
      if (search.value === '') {
        queryParams.delete('search');
      } else {
        queryParams.set('search', search.value);
      }
    }

    const selectedTypes = Object
      .entries(filters)
      .reduce((acc, [k, v]) => (v ? [...acc, k] : acc), []);

    if (selectedTypes.length === 0) {
      queryParams.delete('filters');
    } else {
      queryParams.set('filters', selectedTypes.join('-'));
    }

    // reset to first page only in filters or search is new
    if (queryParams.toString() !== (new URLSearchParams(query)).toString()) {
      history.push({
        pathname: '/1',
        search: `${queryParams}`,
        state: {
          from: location.pathname,
        },
      });
    }
  };

  useEffect(() => {
    onClick();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, search]);

  const toggleFilter = (type) => {
    if (typeof filters[type] === 'undefined') {
      setFilters({ ...filters, [type]: true });
    } else {
      setFilters({ ...filters, [type]: undefined });
    }
  };

  return (
    <>
      <PokeHeader
        types={types}
        search={search}
        setSearch={setSearch}
        filters={filters}
        toggleFilter={toggleFilter}
      />
      <PokeList
        pokemons={pokemons}
        pageNumber={pageNumber}
        searchParams={searchParams}
        searchValue={searchValue}
        filtersValue={filtersValue}
        perPage={perPage}
        loading={loading}
        filters={filters}
        toggleFilter={toggleFilter}
      />
    </>
  );
};

export default PokeContainer;

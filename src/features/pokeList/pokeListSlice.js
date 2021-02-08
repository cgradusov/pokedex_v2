/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPokemon, getPokemonSpecs } from '../../api/PokeAPI';

const initialState = {
  linksLoading: true,
  linksError: null,
  pokemonsLinks: [],

  loading: true,
  error: null,
  pokemonsList: [],

  count: 0,
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemonsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getPokemonsSuccess(state, action) {
      state.pokemonsList = action.payload.pokemonsList;
      state.count = action.payload.count;
      state.loading = false;
    },
    getPokemonsFailure(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.err;
    },
  },
});

export const {
  getPokemonsStart,
  getPokemonsSuccess,
  getPokemonsFailure,

  changePageNumber,
} = pokemons.actions;

export default pokemons.reducer;

const pokeLinksSearch = (search) => {
  if (!Number.isNaN(search) && !Number.isNaN(parseFloat(search))) {
    return (el) => el.number.includes(search);
  }

  return (el) => el.name.includes(search);
};

const pokeLinksFilter = (filters) => (el) => filters.split('-').every((t) => el.types.includes(t));

export const fetchPokemons = (pokeLinks, limit, offset, search, filters) => async (dispatch) => {
  try {
    if (pokeLinks.length === 0) {
      throw Error('Emply pokemons links');
    }
    dispatch(getPokemonsStart());
    const searchedPokeLinks = search !== '' ? pokeLinks.filter(pokeLinksSearch(search)) : pokeLinks;
    const filteredPokeLinks = filters !== '' ? searchedPokeLinks.filter(pokeLinksFilter(filters)) : searchedPokeLinks;
    const count = filteredPokeLinks.length;
    const pokeSlice = filteredPokeLinks.slice(offset, limit);
    const pokemonsListPromises = pokeSlice.map(async (poke) => {
      const pokemon = await getPokemon(poke.name);
      const pokemonSpecs = await getPokemonSpecs(poke.index);
      return { ...pokemon, specs: pokemonSpecs };
    });

    const pokemonsList = await Promise.all(pokemonsListPromises);
    dispatch(getPokemonsSuccess({ pokemonsList, count }));
  } catch (err) {
    dispatch(getPokemonsFailure({
      err: err.toString(),
      loading: pokeLinks.length === 0,
    }));
  }
};

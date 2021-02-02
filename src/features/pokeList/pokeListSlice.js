/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPokemonsLinks, getPokemon, getPokemonSpecs } from '../../api/PokeAPI';
import { formatNumber } from '../../utils/stringUtils';

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
    getPokemonsLinksStart(state) {
      state.linksLoading = true;
      state.linksError = null;
      state.pokemonsList = Array.from(
        { length: state.limit },
        () => ({
          id: 1, name: '', specs: { flavor_text_entries: [] }, types: [],
        }),
      );
    },
    getPokemonsLinksSuccess(state, action) {
      state.pokemonsLinks = action.payload.results.map((el, i) => ({
        index: i + 1,
        number: formatNumber((i + 1).toString()),
        ...el,
      }));
      state.linksLoading = false;
      state.linksError = null;
    },
    getPokemonsLinksFailure(state, action) {
      state.linksLoading = false;
      state.linksError = action.payload;
    },

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
  getPokemonsLinksStart,
  getPokemonsLinksSuccess,
  getPokemonsLinksFailure,

  getPokemonsStart,
  getPokemonsSuccess,
  getPokemonsFailure,

  changePageNumber,
} = pokemons.actions;

export default pokemons.reducer;
export const fetchPokemonsLinks = () => async (dispatch) => {
  try {
    dispatch(getPokemonsLinksStart());
    const pokemonsLinks = await getPokemonsLinks();
    dispatch(getPokemonsLinksSuccess(pokemonsLinks));
  } catch (err) {
    dispatch(getPokemonsLinksFailure());
  }
};

const pokeLinksFilter = (filter) => {
  if (!Number.isNaN(filter) && !Number.isNaN(parseFloat(filter))) {
    return (el) => el.number.includes(filter);
  }

  return (el) => el.name.includes(filter);
};

export const fetchPokemons = (pokeLinks, limit, offset, filter) => async (dispatch) => {
  try {
    if (pokeLinks.length === 0) {
      throw Error('Emply pokemons links');
    }
    dispatch(getPokemonsStart());
    const filteredPokeLinks = filter !== '' ? pokeLinks.filter(pokeLinksFilter(filter)) : pokeLinks;
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

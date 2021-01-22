/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPokemonsLinks, getPokemon, getPokemonSpecs } from '../../api/PokeAPI';

const initialState = {
  linksLoading: true,
  linksError: null,
  pokemonsLinks: [],

  loading: true,
  error: null,
  pokemonsList: [],

  pokemonsPerPage: 18,
  limit: 18,
  offset: 0,
  count: 0,
  pageNumber: 1,
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
      state.pokemonsLinks = action.payload.results;
      state.count = action.payload.count;
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
      state.pokemonsList = action.payload;
      state.loading = false;
    },
    getPokemonsFailure(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.err;
    },

    changePageNumber(state, action) {
      state.pageNumber = action.payload;
      state.limit = state.pokemonsPerPage * action.payload;
      state.offset = state.pokemonsPerPage * (action.payload - 1);
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

export const fetchPokemons = (pokeLinks, limit, offset) => async (dispatch) => {
  try {
    if (pokeLinks.length === 0) {
      throw Error('Emply pokemons links');
    }
    dispatch(getPokemonsStart());
    const pokeSlice = pokeLinks.slice(offset, limit);

    const pokemonsListPromises = pokeSlice.map(async (poke) => {
      const pokemon = await getPokemon(poke.name);
      const pokemonSpecs = await getPokemonSpecs(poke.name);
      return { ...pokemon, specs: pokemonSpecs };
    });

    const pokemonsList = await Promise.all(pokemonsListPromises);
    dispatch(getPokemonsSuccess(pokemonsList));
  } catch (err) {
    dispatch(getPokemonsFailure({
      err: err.toString(),
      loading: pokeLinks.length === 0,
    }));
  }
};

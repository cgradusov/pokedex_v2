/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPokemonsLinks, getPokemon, getPokemonSpecs } from '../../api/PokeAPI';

const initialState = {
  loading: true,
  error: null,

  pokemonsLinks: [],
  pokemonsList: [],
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
      state.loading = true;
      state.error = null;
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
      // state.next = action.payload.next
      state.error = null;
    },
    getPokemonsLinksFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    getPokemonsSuccess(state, action) {
      state.pokemonsList = action.payload;
      state.loading = false;
    },

    changePageNumber(state, action) {
      state.pageNumber = action.payload;
      state.offset = state.limit * (action.payload - 1);
    },
  },
});

export const {
  getPokemonsLinksStart,
  getPokemonsLinksSuccess,
  getPokemonsLinksFailure,

  getPokemonsSuccess,
  changePageNumber,
} = pokemons.actions;

export default pokemons.reducer;

export const fetchPokemons = (limit, offset) => async (dispatch) => {
  try {
    dispatch(getPokemonsLinksStart());

    const pokemonsLinks = await getPokemonsLinks(limit, offset);
    dispatch(getPokemonsLinksSuccess(pokemonsLinks));

    const pokemonsListPromises = pokemonsLinks.results.map(async (poke) => {
      dispatch(getPokemonsLinksStart());
      const pokemon = await getPokemon(poke.name);
      const pokemonSpecs = await getPokemonSpecs(poke.name);
      return { ...pokemon, specs: pokemonSpecs };
    });

    const pokemonsList = await Promise.all(pokemonsListPromises);
    dispatch(getPokemonsSuccess(pokemonsList));
  } catch (err) {
    dispatch(getPokemonsLinksFailure(err));
  }
};

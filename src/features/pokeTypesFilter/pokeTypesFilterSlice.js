/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPokemonsTypes, getPokemonsLinksByType } from '../../api/PokeAPI';
import { getIdFromUrl, formatNumber } from '../../utils/stringUtils';

const initialState = {
  filters: [],
  types: [],

  pokemons: {},
  pokemonsLinks: [],
  count: 0,

  loading: false,
  error: null,
};

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getTypesStart(state) {
      state.loading = true;
    },
    getTypesSuccess(state, action) {
      state.types = action.payload.map((el) => el.name);
      state.loading = false;
    },
    getTypesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    toggleFilter(state, action) {
      const type = action.payload;

      if (state.filters.includes(type)) {
        state.filters = state.filters.filter((el) => el !== type);
      } else {
        state.filters.push(type);
      }
    },
    getPokemonsByTypeStart(state) {
      state.loading = true;
    },
    getPokemonsByTypeSuccess(state, action) {
      action.payload.forEach(({ type, pokemons }) => pokemons.forEach((el) => {
        const id = getIdFromUrl(el.url);
        if (typeof state.pokemons[id] === 'undefined') {
          state.pokemons[id] = {
            index: id,
            number: formatNumber(id.toString()),
            ...el,
            types: [type],
          };
        } else {
          state.pokemons[id].types.push(type);
        }
      }));
      state.loading = false;
    },
    getPokemonsByTypeFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    compilePokemonsLinks(state) {
      state.loading = false;
      state.pokemonsLinks = Object.values(state.pokemons);
      state.pokemonsLinks.sort((a, b) => a.id - b.id);
      state.count = state.pokemonsLinks.length;
    },
  },
});

export default filter.reducer;

export const {
  getTypesStart,
  getTypesSuccess,
  getTypesFailure,

  toggleFilter,

  getPokemonsByTypeStart,
  getPokemonsByTypeSuccess,
  getPokemonsByTypeFailure,

  compilePokemonsLinks,
} = filter.actions;

export const fetchPokemonsTypes = () => async (dispatch) => {
  try {
    dispatch(getTypesStart());
    const types = await getPokemonsTypes();
    dispatch(getTypesSuccess(types.results.filter((el) => !['unknown', 'shadow'].includes(el.name))));
  } catch (err) {
    dispatch(getTypesFailure(err.toString()));
  }
};

export const fetchPokemonsLinksByTypes = (types) => async (dispatch) => {
  try {
    dispatch(getPokemonsByTypeStart());

    const typesPromises = types.map(async (type) => {
      const typeData = await getPokemonsLinksByType(type);
      return {
        pokemons: typeData.pokemon
          .map((el) => el.pokemon)
          .filter((el) => getIdFromUrl(el.url) <= 898),
        type,
      };
    });

    dispatch(getPokemonsByTypeSuccess(await Promise.all(typesPromises)));
  } catch (err) {
    dispatch(getPokemonsByTypeFailure(err.toString()));
  }
};

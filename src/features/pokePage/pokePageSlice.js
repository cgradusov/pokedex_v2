/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPokemon, getPokemonSpecs } from '../../api/PokeAPI';

const initialState = {
  loading: true,
  error: null,
  data: {
    id: 1,
    height: 7,
    weight: 69,
    types: [
      { type: { name: 'grass' } },
    ],
    stats: [{
      base_stat: 45,
      stat: {
        name: 'hp',
      },
    }],
    specs: {
      gender_rate: 0,
    },
  },
};

const pokemon = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    getPokemonStart(state) {
      state.loading = true;
    },
    getPokemonSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getPokemonFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default pokemon.reducer;

export const {
  getPokemonStart,
  getPokemonSuccess,
  getPokemonFailure,
} = pokemon.actions;

export const fetchPokemon = (name) => async (dispatch) => {
  try {
    dispatch(getPokemonStart());
    const pokemonData = await getPokemon(name);
    const pokemonSpecs = await getPokemonSpecs(name);
    dispatch(getPokemonSuccess({ ...pokemonData, specs: pokemonSpecs }));
  } catch (err) {
    dispatch(getPokemonFailure(err.toString()));
  }
};

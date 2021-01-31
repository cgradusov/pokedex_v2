/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemonsPerPage: 18,
  limit: 18,
  offset: 0,
  pageNumber: 1,
};

const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePageNumber(state, action) {
      state.pageNumber = action.payload;
      state.limit = state.pokemonsPerPage * action.payload;
      state.offset = state.pokemonsPerPage * (action.payload - 1);

      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    },
  },
});

export const {
  changePageNumber,
} = pagination.actions;

export default pagination.reducer;

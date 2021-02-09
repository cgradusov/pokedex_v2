/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  isValid: true,
};

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch(state, action) {
      state.search = action.payload;
    },
    setValid(state, action) {
      state.isValid = action.payload;
    },
  },
});

export const {
  updateSearch,
  setValid,
} = search.actions;

export default search.reducer;

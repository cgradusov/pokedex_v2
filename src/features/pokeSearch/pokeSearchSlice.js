/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: null,
};

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const {
  setFilter,
} = search.actions;

export default search.reducer;

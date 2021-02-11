/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemonsPerPage: 24,
};

const pagination = createSlice({
  name: 'pagination',
  initialState,
});

export default pagination.reducer;

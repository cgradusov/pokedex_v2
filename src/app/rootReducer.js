import { combineReducers } from '@reduxjs/toolkit';
import pokeListReducer from '../features/pokeList/pokeListSlice';
import pokePaginationReducer from '../features/pokePagination/pokePaginationSlice';

const rootReducer = combineReducers({
  pokeList: pokeListReducer,
  pokePagination: pokePaginationReducer,
});

export default rootReducer;

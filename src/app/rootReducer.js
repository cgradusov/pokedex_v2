import { combineReducers } from '@reduxjs/toolkit';
import pokeListReducer from '../features/pokeList/pokeListSlice';
import pokeSearchReducer from '../features/pokeSearch/pokeSearchSlice';
import pokePaginationReducer from '../features/pokePagination/pokePaginationSlice';

const rootReducer = combineReducers({
  pokeList: pokeListReducer,
  pokeSearch: pokeSearchReducer,
  pokePagination: pokePaginationReducer,
});

export default rootReducer;

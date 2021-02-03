import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import pokeListReducer from '../features/pokeList/pokeListSlice';
import pokePaginationReducer from '../features/pokePagination/pokePaginationSlice';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  pokeList: pokeListReducer,
  pokePagination: pokePaginationReducer,
});

export default createRootReducer;

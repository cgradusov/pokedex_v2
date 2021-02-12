import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import pokeListReducer from '../features/pokeList/pokeListSlice';
import pokePaginationReducer from '../features/pokePagination/pokePaginationSlice';
import pokeTypesFilterReducer from '../features/pokeTypesFilter/pokeTypesFilterSlice';
import pokeSearchReducer from '../features/pokeSearch/pokeSeachSlice';
import pokePageReducer from '../features/pokePage/pokePageSlice';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  pokeList: pokeListReducer,
  pokePagination: pokePaginationReducer,
  pokeFilter: pokeTypesFilterReducer,
  pokeSearch: pokeSearchReducer,
  pokePage: pokePageReducer,
});

export default createRootReducer;

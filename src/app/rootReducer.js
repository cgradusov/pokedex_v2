import { combineReducers } from '@reduxjs/toolkit';
import pokeListReducer from '../features/pokeList/pokeListSlice';
import pokeSearchReducer from '../features/pokeSearch/pokeSearchSlice';

const rootReducer = combineReducers({
  pokeList: pokeListReducer,
  pokeSearch: pokeSearchReducer,
});

export default rootReducer;

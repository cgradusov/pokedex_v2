import { combineReducers } from "@reduxjs/toolkit";
import pokeListReducer from "../features/pokeList/pokeListSlice";

const rootReducer = combineReducers({
    pokeList: pokeListReducer
})

export default rootReducer

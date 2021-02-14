import { combineReducers, createStore } from "redux";

import searchPokemonReducer from "./search-pokemon";

const reducers = combineReducers({
  searchPokemonReducer,
});

const store = createStore(reducers);

export default store;

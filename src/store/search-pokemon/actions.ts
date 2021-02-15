import createAction from "../utils/action-creator";
import { PokemonType } from "./types";

export enum SEARCH_POKEMON {
  REQUEST = "search-pokemon/REQUEST",
  RESOLVE = "search-pokemon/RESOLVE",
  FAIL = "search-pokemon/FAIL",
  CLEAR = "search-pokemon/CLEAR",
}

const searchPokemonRequest = createAction<string>(SEARCH_POKEMON.REQUEST);
const searchPokemonResolve = createAction<PokemonType>(SEARCH_POKEMON.RESOLVE);
const searchPokemonFail = createAction<string>(SEARCH_POKEMON.FAIL);
const searchPokemonClear = createAction(SEARCH_POKEMON.CLEAR);

const actions = {
  searchPokemonRequest,
  searchPokemonResolve,
  searchPokemonFail,
  searchPokemonClear,
};

export default actions;

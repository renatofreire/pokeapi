import createAction from "../utils/action-creator";

export enum SEARCH_POKEMON {
  REQUEST = "search-pokemon/REQUEST",
  RESOLVE = "search-pokemon/RESOLVE",
  FAIL = "search-pokemon/FAIL",
}

const searchPokemonRequest = createAction<string>(SEARCH_POKEMON.REQUEST);
const searchPokemonResolve = createAction(SEARCH_POKEMON.RESOLVE);
const searchPokemonFail = createAction<string>(SEARCH_POKEMON.FAIL);

const actions = {
  searchPokemonRequest,
  searchPokemonResolve,
  searchPokemonFail,
};

export default actions;

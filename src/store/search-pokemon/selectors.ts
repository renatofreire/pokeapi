import { createSelector } from "reselect";

import { SearchPokemonState } from "./types";

export const searchPokemonSlice = (state): SearchPokemonState =>
  state.searchPokemon;

export const isLoading = createSelector(
  searchPokemonSlice,
  (searchPokemon) => searchPokemon.loading
);

export const hasError = createSelector(searchPokemonSlice, (searchPokemon) =>
  Boolean(searchPokemon.error)
);

export const pokemonResult = createSelector(
  searchPokemonSlice,
  (searchPokemon) => searchPokemon.pokemonResult
);

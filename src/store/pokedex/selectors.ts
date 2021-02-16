import { createSelector } from "reselect";

export const pokedexSlice = (state) => state.pokedex;

export const pokedexList = createSelector(
  pokedexSlice,
  (pokedex) => pokedex.pokemon
);

export const pokedexCounter = createSelector(
  pokedexList,
  (pokedexList) => pokedexList?.length || 0
);

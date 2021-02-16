import createAction from "../utils/action-creator";
import { PokemonPokedex } from "./types";

export const POKEDEX = {
  SAVE: "pokedex/SAVE",
  REMOVE: "pokedex/REMOVE",
};

const pokedexSavePokemon = createAction<PokemonPokedex>(POKEDEX.SAVE);
const pokedexRemovePokemon = createAction<PokemonPokedex>(POKEDEX.REMOVE);

const actions = {
  pokedexSavePokemon,
  pokedexRemovePokemon,
};

export default actions;

import searchPokemonReducer from "./reducer";

export { default as searchPokemonActions } from "./actions";

export type {
  PokemonBasicInfo,
  PokemonStat,
  PokemonType,
  SearcPokemonState,
} from "./types";

export default searchPokemonReducer;

import { ActionReturn } from "../utils/action-creator";
import { SearcPokemonState } from "./types";
import { SEARCH_POKEMON } from "./actions";

const initialState: SearcPokemonState = {
  loading: false,
  error: null,
  pokemonResult: null,
};

const searchPokemonReducer = (
  state = initialState,
  action: ActionReturn<any>
) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_POKEMON.REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        pokemonResult: null,
      };

    case SEARCH_POKEMON.RESOLVE:
      return {
        ...state,
        loading: false,
        error: null,
        pokemonResult: payload,
      };

    case SEARCH_POKEMON.FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        pokemonResult: null,
      };
    default:
      return state;
  }
};

export default searchPokemonReducer;

import { ActionReturn } from "../utils/action-creator";
import { PokedexState } from "./types";
import { POKEDEX } from "./actions";

const initialState: PokedexState = {
  pokemon: [],
};

const PokedexReducer = (state = initialState, action: ActionReturn<any>) => {
  const { type, payload } = action;

  switch (type) {
    case POKEDEX.SAVE:
      const alreadySaved = state.pokemon.find(
        (pokemon) => pokemon.id === payload.id
      );

      return alreadySaved
        ? state
        : { ...state, pokemon: [...state.pokemon, payload] };

    case POKEDEX.REMOVE:
      const updateList = state.pokemon.filter(
        (pokemon) => pokemon.id !== payload.id
      );

      return { ...state, pokemon: updateList };

    default:
      return state;
  }
};

export default PokedexReducer;

import { useReducer, useState } from "react";
import request from "../../../../../services/request";

type PokemonByType = { pokemon: { name: string; url: string } };

interface TypeState {
  isLoading: boolean;
  hasError: boolean;
  pokemonList: PokemonByType[];
}

interface usePokemonTypeHook {
  selected: string;
  typeState: TypeState;
  setSelected: (selected: string) => void;
  requestPokemonByType: (url: string) => void;
}

enum TypeAction {
  REQUEST = "request",
  RESOLVE = "resolve",
  FAIL = "fail",
}

const typeInitialState = {
  isLoading: false,
  hasError: false,
  pokemonList: [],
};

export default function usePokemonType(): usePokemonTypeHook {
  const [selected, setSelected] = useState<string>("");

  function typeReducer(state, action) {
    switch (action.type) {
      case TypeAction.REQUEST:
        return { isLoading: true, hasError: false, pokemonList: [] };

      case TypeAction.RESOLVE:
        return {
          isLoading: false,
          hasError: false,
          pokemonList: action.payload,
        };

      case TypeAction.FAIL:
        return { isLoading: false, hasError: true, pokemonList: [] };
      default:
        return state;
    }
  }

  const [typeState, typeDispatch] = useReducer(typeReducer, typeInitialState);

  async function requestPokemonByType(url) {
    typeDispatch({ type: TypeAction.REQUEST });
    try {
      const response = await request(url);

      const { pokemon } = response;
      typeDispatch({ type: TypeAction.RESOLVE, payload: pokemon });
    } catch (e) {
      typeDispatch({ type: TypeAction.FAIL });
    }
  }

  return {
    selected,
    setSelected,
    typeState,
    requestPokemonByType,
  };
}

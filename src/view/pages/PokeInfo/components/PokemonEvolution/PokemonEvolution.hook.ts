import { useReducer } from "react";
import request from "../../../../../services/request";
import { PokemonType } from "../../../../../store/search-pokemon";

type EvolutionChain = {
  species: string;
  evolvesTo: EvolutionChain[][] | null;
};

export interface EvolutionState {
  isLoading: boolean;
  hasError: boolean;
  evolutionChain: EvolutionChain[];
}

interface usePokemonEvolutionHook {
  evolutionState: EvolutionState;
  requestEvolution: () => void;
}

enum EvolutionActions {
  REQUEST = "request",
  RESOLVE = "resolve",
  FAIL = "fail",
}

const evolutionInitialState = {
  isLoading: false,
  hasError: false,
  evolutionChain: [],
};

export default function usePokemonEvolution(
  pokemon: PokemonType | null
): usePokemonEvolutionHook {
  function returnEvolution(chain): EvolutionChain[] {
    return [
      {
        species: chain.species?.name,
        evolvesTo:
          chain.evolves_to?.length > 0
            ? chain.evolves_to.map((a) => returnEvolution(a))
            : null,
      },
    ];
  }

  async function requestEvolution() {
    if (!pokemon) return;

    evolutionDispatch({ type: EvolutionActions.REQUEST });
    try {
      const r = await request(pokemon.species.url);
      const { evolution_chain } = r;
      const { chain } = await request(evolution_chain.url);
      const evolutionChain = returnEvolution(chain);
      evolutionDispatch({
        type: EvolutionActions.RESOLVE,
        payload: evolutionChain,
      });
    } catch (error) {
      evolutionDispatch({ type: EvolutionActions.FAIL });
    }
  }

  function evolutionReducer(state: EvolutionState, action) {
    switch (action.type) {
      case EvolutionActions.REQUEST:
        return { isLoading: true, hasError: false, evolutionChain: [] };

      case EvolutionActions.RESOLVE:
        return {
          isLoading: false,
          hasError: false,
          evolutionChain: action.payload,
        };

      case EvolutionActions.FAIL:
        return { isLoading: false, hasError: true, evolutionChain: [] };

      default:
        return state;
    }
  }

  const [evolutionState, evolutionDispatch] = useReducer(
    evolutionReducer,
    evolutionInitialState
  );

  return {
    evolutionState,
    requestEvolution,
  };
}

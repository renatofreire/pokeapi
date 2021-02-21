import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PokemonType,
  searchPokemonActions,
  searchPokemonSelectors,
} from "../../../store/search-pokemon";

import usePokemonEvolution from "./components/PokemonEvolution/PokemonEvolution.hook";

interface usePokeInfoScreenReturn {
  pokemon: PokemonType | null;
  isLoading: boolean;
  hasError: boolean;
  evolutionState: EvolutionState;
  requestEvolution: () => void;
  handleTryAgainButtonClick: () => void;
}

type EvolutionChain = {
  species: string;
  evolvesTo: EvolutionChain[][] | null;
};

export interface EvolutionState {
  isLoading: boolean;
  hasError: boolean;
  evolutionChain: EvolutionChain[];
}

const usePokeInfoScreen = (name?: string): usePokeInfoScreenReturn => {
  const dispatch = useDispatch();

  const pokemon = useSelector(searchPokemonSelectors.pokemonResult);
  const isLoading = useSelector(searchPokemonSelectors.isLoading);
  const hasError = useSelector(searchPokemonSelectors.hasError);

  const { evolutionState, requestEvolution } = usePokemonEvolution(pokemon);

  useEffect(() => {
    requestPokemonInformation();
    pokemon && requestEvolution();
  }, [name]);

  function requestPokemonInformation() {
    dispatch(searchPokemonActions.searchPokemonRequest(name));
  }

  function handleTryAgainButtonClick() {
    requestPokemonInformation();
  }

  return {
    pokemon,
    isLoading,
    hasError,
    evolutionState,
    requestEvolution,
    handleTryAgainButtonClick,
  };
};

export default usePokeInfoScreen;

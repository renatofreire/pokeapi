import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchPokemonActions,
  searchPokemonSelectors,
} from "../../../store/search-pokemon";

import type { PokemonType } from "../../../store/search-pokemon";

interface useSearchPokemonScreenReturn {
  inputValue: string;
  inputRef: React.RefObject<HTMLInputElement>;
  isLoading: boolean;
  hasError: boolean;
  pokemon: PokemonType | null;
  handleInputChange: (e: React.SyntheticEvent) => void;
  handleClearButtonClick: () => void;
  handleSearchButtonClick: () => void;
}

export default function useSearchPokemonScreen(): useSearchPokemonScreenReturn {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isLoading = useSelector(searchPokemonSelectors.isLoading);
  const hasError = useSelector(searchPokemonSelectors.hasError);
  const pokemon = useSelector(searchPokemonSelectors.pokemonResult);

  function handleInputChange(e: React.SyntheticEvent) {
    const { value } = e.target as HTMLInputElement;
    setInputValue(value);
  }

  function handleClearButtonClick() {
    inputRef.current?.focus();
    setInputValue("");
    dispatch(searchPokemonActions.searchPokemonClear());
  }

  function handleSearchButtonClick() {
    dispatch(searchPokemonActions.searchPokemonRequest(inputValue));
  }

  return {
    inputValue,
    inputRef,
    isLoading,
    hasError,
    pokemon,
    handleInputChange,
    handleClearButtonClick,
    handleSearchButtonClick,
  };
}

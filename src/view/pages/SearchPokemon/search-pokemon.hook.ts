import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchPokemonActions,
  searchPokemonSelectors,
} from "../../../store/search-pokemon";

import { PokedexActions } from "../../../store/pokedex";

import type { PokemonType } from "../../../store/search-pokemon";
import { useHistory } from "react-router-dom";
import ROUTES from "../../../constants/routes";

interface useSearchPokemonScreenReturn {
  inputValue: string;
  inputRef: React.RefObject<HTMLInputElement>;
  isLoading: boolean;
  hasError: boolean;
  pokemon: PokemonType | null;
  handleInputChange: (e: React.SyntheticEvent) => void;
  handleClearButtonClick: () => void;
  handleSearchButtonClick: () => void;
  handleSaveButtonClick: () => void;
  handleSeeMoreButtonClick: () => void;
}

export default function useSearchPokemonScreen(): useSearchPokemonScreenReturn {
  const dispatch = useDispatch();
  const history = useHistory();

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

  function handleSaveButtonClick() {
    if (pokemon?.id) {
      const pokedexPokemon = {
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.image,
      };
      dispatch(PokedexActions.pokedexSavePokemon(pokedexPokemon));
    }
  }

  function handleSeeMoreButtonClick() {
    if (pokemon?.name) {
      history.push(`${ROUTES.INFOS}/${pokemon?.name}`);
    }
  }

  useEffect(() => {
    dispatch(searchPokemonActions.searchPokemonClear());
  }, []);

  return {
    inputValue,
    inputRef,
    isLoading,
    hasError,
    pokemon,
    handleInputChange,
    handleClearButtonClick,
    handleSearchButtonClick,
    handleSaveButtonClick,
    handleSeeMoreButtonClick,
  };
}

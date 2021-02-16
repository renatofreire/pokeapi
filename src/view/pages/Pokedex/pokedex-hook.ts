import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { PokedexActions, PokedexSelectors } from "../../../store/pokedex";
import type { PokemonPokedex } from "../../../store/pokedex";
import ROUTES from "../../../constants/routes";

interface usePokedexScreenReturn {
  pokemonList: PokemonPokedex[];
  hasPokemon: boolean;
  handleRemoveButtonClick: (pokemon: PokemonPokedex) => void;
  handleSearchButtonClick: () => void;
}

export default function usePokedexScreen(): usePokedexScreenReturn {
  const dispatch = useDispatch();
  const history = useHistory();

  const pokemonList = useSelector(PokedexSelectors.pokedexList);
  const pokemonListCounter = useSelector(PokedexSelectors.pokedexCounter);
  const hasPokemon = pokemonListCounter > 0;

  function handleRemoveButtonClick(pokemon: PokemonPokedex) {
    dispatch(PokedexActions.pokedexRemovePokemon(pokemon));
  }

  function handleSearchButtonClick() {
    history.push(ROUTES.SEARCH_POKEMON);
  }

  return {
    pokemonList,
    hasPokemon,
    handleRemoveButtonClick,
    handleSearchButtonClick,
  };
}

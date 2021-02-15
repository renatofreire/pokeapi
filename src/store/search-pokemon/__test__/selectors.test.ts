import * as searchPokemonSelectors from "../selectors";

import { pokemonMock } from "../../utils/fixtures";

test("returns searchPokemonSlice", () => {
  const state = {
    searchPokemon: {
      loading: false,
      error: null,
      pokemonResult: pokemonMock,
    },
  };

  expect(searchPokemonSelectors.searchPokemonSlice(state)).toEqual({
    loading: false,
    error: null,
    pokemonResult: pokemonMock,
  });
});

test("return isLoading when loading state is true", () => {
  const state = {
    searchPokemon: {
      loading: true,
      error: null,
      pokemonResult: pokemonMock,
    },
  };

  expect(searchPokemonSelectors.isLoading(state)).toBe(true);
});

test("return isLoading when loading state is false", () => {
  const state = {
    searchPokemon: {
      loading: false,
      error: null,
      pokemonResult: pokemonMock,
    },
  };

  expect(searchPokemonSelectors.isLoading(state)).toBe(false);
});

test("return hasErro when error state has value", () => {
  const state = {
    searchPokemon: {
      loading: false,
      error: "Not Found",
      pokemonResult: pokemonMock,
    },
  };

  expect(searchPokemonSelectors.hasError(state)).toBe(true);
});

test("return hasError when error state has not value", () => {
  const state = {
    searchPokemon: {
      loading: false,
      error: null,
      pokemonResult: pokemonMock,
    },
  };

  expect(searchPokemonSelectors.hasError(state)).toBe(false);
});

test("return hasError when error state has an empty string", () => {
  const state = {
    searchPokemon: {
      loading: false,
      error: "",
      pokemonResult: pokemonMock,
    },
  };

  expect(searchPokemonSelectors.hasError(state)).toBe(false);
});

test("return pokemonResult", () => {
  const state = {
    searchPokemon: {
      loading: false,
      error: null,
      pokemonResult: pokemonMock,
    },
  };

  expect(searchPokemonSelectors.pokemonResult(state)).toEqual(pokemonMock);
});

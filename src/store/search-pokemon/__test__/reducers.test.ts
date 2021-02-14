import { pokemonMock } from "../../utils/fixtures";

import reducer from "../reducer";
import actions from "../actions";

describe("search pokemon reducer", () => {
  test("changes loading to true and error and pokemonResult to null when request search pokemon", () => {
    const initialState = { ...reducer(undefined, { type: "" }) };
    const finalState = reducer(initialState, actions.searchPokemonRequest());

    const expectedState = {
      loading: true,
      error: null,
      pokemonResult: null,
    };

    expect(finalState).toEqual(expectedState);
  });

  test("changes loading and error to false and pokemonResult to payload value when requests is resolved", () => {
    const initialState = { ...reducer(undefined, { type: "" }) };
    const finalState = reducer(
      initialState,
      actions.searchPokemonResolve(pokemonMock)
    );

    const expectedState = {
      loading: false,
      error: null,
      pokemonResult: pokemonMock,
    };

    expect(finalState).toEqual(expectedState);
  });

  test("changes loading to false, pokemonResult to null and error to payload value value when requests fails", () => {
    const initialState = { ...reducer(undefined, { type: "" }) };
    const finalState = reducer(
      initialState,
      actions.searchPokemonFail("request error")
    );

    const expectedState = {
      loading: false,
      error: "request error",
      pokemonResult: null,
    };

    expect(finalState).toEqual(expectedState);
  });
});

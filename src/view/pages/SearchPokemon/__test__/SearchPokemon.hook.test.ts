import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useSelector } from "react-redux";

import useSearchPokemonScreen from "../search-pokemon.hook";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe("useSearchPokemonScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("changes input value state", () => {
    const { result } = renderHook(() => useSearchPokemonScreen());

    const mockEvent = ({
      target: {
        value: "input test",
      },
    } as unknown) as React.SyntheticEvent;

    act(() => result.current.handleInputChange(mockEvent));

    expect(result.current.inputValue).toEqual("input test");
  });

  it("dispatches clear action", () => {
    const { result } = renderHook(() => useSearchPokemonScreen());

    act(() => result.current.handleClearButtonClick());

    expect(result.current.inputValue).toEqual("");
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "search-pokemon/CLEAR",
    });
  });

  it("dispatches search pokemon request action", () => {
    const { result } = renderHook(() => useSearchPokemonScreen());

    const mockEvent = ({
      target: {
        value: "test pokemon",
      },
    } as unknown) as React.SyntheticEvent;

    act(() => result.current.handleInputChange(mockEvent));
    act(() => result.current.handleSearchButtonClick());

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "search-pokemon/REQUEST",
      payload: "test pokemon",
    });
  });

  it("dispatches save on pokedex action", () => {
    (useSelector as jest.Mock).mockImplementation((callback) =>
      callback({
        searchPokemon: {
          loading: false,
          error: false,
          pokemonResult: { name: "Vaporeon", id: 134, image: "some-image" },
        },
      })
    );

    const { result } = renderHook(() => useSearchPokemonScreen());

    act(() => result.current.handleSaveButtonClick());

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "pokedex/SAVE",
      payload: {
        name: "Vaporeon",
        id: 134,
        image: "some-image",
      },
    });

    (useSelector as jest.Mock).mockReset()();
  });

  it("does not dispatch save on pokedex action when there aren't pokemonResult", () => {
    (useSelector as jest.Mock).mockImplementation((callback) =>
      callback({
        searchPokemon: {
          loading: false,
          error: false,
          pokemonResult: null,
        },
      })
    );

    const { result } = renderHook(() => useSearchPokemonScreen());

    act(() => result.current.handleSaveButtonClick());

    expect(mockDispatch).toHaveBeenCalledTimes(0);

    (useSelector as jest.Mock).mockReset()();
  });
});

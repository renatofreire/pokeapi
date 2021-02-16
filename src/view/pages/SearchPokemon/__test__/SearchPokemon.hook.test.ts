import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useSelector } from "react-redux";
import ROUTES from "../../../../constants/routes";

import useSearchPokemonScreen from "../search-pokemon.hook";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

const mockHistory = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({ push: mockHistory }),
}));

describe("useSearchPokemonScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches clear action on first render", () => {
    renderHook(() => useSearchPokemonScreen());

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: "search-pokemon/CLEAR",
    });
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
    expect(mockDispatch).toHaveBeenCalledTimes(2);
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

    expect(mockDispatch).toHaveBeenCalledTimes(2);
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

    expect(mockDispatch).toHaveBeenCalledTimes(2);
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

    expect(mockDispatch).toHaveBeenCalledTimes(1);

    (useSelector as jest.Mock).mockReset()();
  });

  it("pushes history when see more button is pressed", () => {
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

    act(() => result.current?.handleSeeMoreButtonClick());

    expect(mockHistory).toHaveBeenCalledTimes(1);
    expect(mockHistory).toHaveBeenCalledWith(`${ROUTES.INFOS}/Vaporeon`);
    (useSelector as jest.Mock).mockReset()();
  });

  it("does not push history when see more button is pressed and there aren pokemonResult", () => {
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

    act(() => result.current?.handleSeeMoreButtonClick());

    expect(mockHistory).toHaveBeenCalledTimes(0);
  });
});

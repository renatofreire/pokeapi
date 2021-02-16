import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";

import ROUTES from "../../../../constants/routes";
import usePokedexScreen from "../pokedex-hook";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

const mockHistory = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({ push: mockHistory }),
}));

describe("usePokedexScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches remove action when remove button is clicked", () => {
    const { result } = renderHook(() => usePokedexScreen());

    const pokemontoRemove = {
      name: "sandslash",
      id: 28,
      image: "image-src",
    };

    act(() => result.current?.handleRemoveButtonClick(pokemontoRemove));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "pokedex/REMOVE",
      payload: pokemontoRemove,
    });
  });

  it("pushes history when search button is pressed", () => {
    const { result } = renderHook(() => usePokedexScreen());

    act(() => result.current?.handleSearchButtonClick());

    expect(mockHistory).toHaveBeenCalledTimes(1);
    expect(mockHistory).toHaveBeenCalledWith(ROUTES.SEARCH_POKEMON);
  });

  it("pushes history when see more button is pressed", () => {
    const { result } = renderHook(() => usePokedexScreen());

    act(() => result.current?.handleSeeMoreButtonClick("ponyta"));

    expect(mockHistory).toHaveBeenCalledTimes(1);
    expect(mockHistory).toHaveBeenCalledWith(`${ROUTES.INFOS}/ponyta`);
  });
});

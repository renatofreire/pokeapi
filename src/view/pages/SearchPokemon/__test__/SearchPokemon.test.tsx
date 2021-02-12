import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SearchPokemon from "..";

test("renders default PokeCard component", () => {
  render(<SearchPokemon />);

  expect(screen.getByText("Search pokemon by name or id:")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Charizard")).toBeInTheDocument();
  expect(screen.getByText("Clear")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});

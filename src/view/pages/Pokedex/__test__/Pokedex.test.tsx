import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Pokedex from "..";

test("renders default PokeCard component", () => {
  render(<Pokedex />);

  expect(screen.getByText("Pokedex")).toBeInTheDocument();
});

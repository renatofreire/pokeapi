import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import PokeCard from "..";

test("renders default PokeCard component", () => {
  render(<PokeCard name="Charizard" number="6" image={"link-to-file"} />);

  const imageComponent = screen.getByAltText("Charizard image");

  expect(screen.getByText("Charizard")).toBeInTheDocument();
  expect(screen.getByText("#6")).toBeInTheDocument();
  expect(imageComponent).toBeInTheDocument();
  expect(imageComponent).toHaveAttribute("src", "link-to-file");
});

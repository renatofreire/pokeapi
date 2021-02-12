import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "..";

test("renders default Nav component", () => {
  render(
    <Router>
      <Nav />
    </Router>
  );

  expect(screen.getByText("Pokedex")).toBeInTheDocument();
  expect(screen.getByText("Search Pokemon")).toBeInTheDocument();
});

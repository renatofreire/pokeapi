import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "..";

test("renders default Header component", () => {
  render(<Header title="Lorem ipsum" />);

  expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
});

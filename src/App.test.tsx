import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders default component", () => {
  render(<App />);
  expect(screen.getByText(/Poke API/i)).toBeInTheDocument();
});

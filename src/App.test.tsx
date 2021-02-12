import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test("renders default component", () => {
  const { container } = render(
    <Router>
      <App />
    </Router>
  );

  const title = container.querySelector("h1");

  expect(title).toBeInTheDocument();
  expect(container.querySelector("h1")).toHaveTextContent("Search Pokemon");
});

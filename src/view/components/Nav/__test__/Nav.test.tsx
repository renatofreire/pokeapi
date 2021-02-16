import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Nav from "..";

import React from "react";

const mockState = {
  pokedex: {
    pokemon: [
      { name: "nidorino", id: 33 },
      { name: "gloom", id: 44 },
    ],
  },
};

test("renders default Nav component", () => {
  const mockStore = configureStore();
  const store = mockStore(mockState);

  render(
    <Provider store={store}>
      <Router>
        <Nav />
      </Router>
    </Provider>
  );

  expect(screen.getByText("Pokedex - (2)")).toBeInTheDocument();
  expect(screen.getByText("Search Pokemon")).toBeInTheDocument();
});

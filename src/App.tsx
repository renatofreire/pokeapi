import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";

import ROUTES, { TITLES } from "./constants/routes";
import tokens from "./constants/tokens";
import Header from "./view/components/Header";
import Nav from "./view/components/Nav";
import Pokedex from "./view/pages/Pokedex";
import SearchPokemon from "./view/pages/SearchPokemon";

const Body = styled.div`
  display: grid;

  grid-template-areas:
    "nav header"
    "nav content";

  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto 1fr;
`;

const Content = styled.div`
  grid-area: content;

  padding: ${tokens.spacing.innerSpace.medium};
  background-color: ${tokens.colors.bgLvl1};
`;

function App() {
  const { pathname } = useLocation();

  return (
    <Body>
      <Header title={TITLES[pathname]} />
      <Nav />

      <Content>
        <Switch>
          <Route exact path={ROUTES.POKEDEX}>
            <Pokedex />
          </Route>
          <Route exact path={ROUTES.SEARCH_POKEMON}>
            <SearchPokemon />
          </Route>
          <Route exact path="/">
            <Redirect to={ROUTES.SEARCH_POKEMON} />
          </Route>
        </Switch>
      </Content>
    </Body>
  );
}

export default App;

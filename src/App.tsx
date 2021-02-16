import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";

import ROUTES, { TITLES } from "./constants/routes";
import tokens from "./constants/tokens";
import Header from "./view/components/Header";
import Nav from "./view/components/Nav";
import Pokedex from "./view/pages/Pokedex";
import PokeInfos from "./view/pages/PokeInfo";
import SearchPokemon from "./view/pages/SearchPokemon";

const Body = styled.div`
  display: grid;
  grid-template-areas:
    "nav header"
    "nav content";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;

  height: 100vh;

  @media (max-width: 1000px) {
    grid-template-areas:
      "header"
      "content"
      "nav";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
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

          <Route path={ROUTES.INFOS}>
            <PokeInfos />
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

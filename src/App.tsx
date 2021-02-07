import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ROUTES from "./constants/routes";

function App() {
  return (
    <div>
      <header>
        <p>Poke API</p>
      </header>
      <nav>
        <Link to={ROUTES.POKEDEX}>Pokedex</Link>
        <Link to={ROUTES.SEARCH_POKEMON}>Search Pokemon</Link>
      </nav>
      <div>
        <Switch>
          <Route exact path={ROUTES.POKEDEX}>
            <div>Route 1</div>
          </Route>
          <Route exact path={ROUTES.SEARCH_POKEMON}>
            <div>Route 2</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

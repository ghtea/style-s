import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./routes/Nav";
import Home from "./routes/Home";
import Units from "./routes/Units";
import Pages from "./routes/Pages";

import "./App.module.scss";

type PropsApp = {};

// TS  https://velog.io/@velopert/create-typescript-react-component
// SCSS https://sass-guidelin.es/ko/
function App({}: PropsApp) {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/units">
          <Units />
        </Route>
        <Route path="/pages">
          <Pages />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

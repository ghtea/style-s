import React from "react";
import { Route, Switch } from "react-router-dom";
import Buttons from "../components/Works/Buttons";
import Tooltips from "../components/Works/Tooltips";
import Social from "../components/Works/Social";

type PropsWorks = {};

function Works({}: PropsWorks) {
  return (
    <Switch>
      <Route path="/works" exact={true}>
        <div>Works</div>
      </Route>

      <Route path="/works/buttons">
        <Buttons />
      </Route>
      <Route path="/works/tooltips">
        <Tooltips />
      </Route>
      <Route path="/works/social">
        <Social />
      </Route>

      <Route path="/works/inputs-text">
        <div />
      </Route>
      <Route path="/works/inputs-range">
        <div />
      </Route>
      <Route path="/works/inputs-checkbox">
        <div />
      </Route>

      <Route path="/works/rotate">
        <div />
      </Route>

      <Route path="/works/nav">
        <div />
      </Route>
      <Route path="/works/top-menu">
        <div />
      </Route>

    </Switch>
  );
}

Works.defaultProps = {};

export default Works;

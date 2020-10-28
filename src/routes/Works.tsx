import React from "react";
import { Route, Switch } from "react-router-dom";
import Buttons from "../components/Works/Buttons";
import Tooltips from "../components/Works/Tooltips";

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
    </Switch>
  );
}

Works.defaultProps = {};

export default Works;

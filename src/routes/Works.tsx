import React from "react";
import { Route, Switch } from "react-router-dom";
import Buttons from "../components/Works/Buttons";

type PropsWorks = {
  
};

function Works({ }: PropsWorks) {
  
  return (
      <Switch>

        <Route path="/works" exact={true}>
          <div>Works</div>
        </Route>

        <Route path="/works/buttons">
          <Buttons />
        </Route>
        
      </Switch>
  );
}

Works.defaultProps = {
  
};

export default Works;
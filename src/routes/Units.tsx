import React from "react";
import { Route, Switch } from "react-router-dom";
import Buttons from "../components/Units/Buttons";

type PropsUnits = {
  
};

function Units({ }: PropsUnits) {
  
  return (
      <Switch>

        <Route path="/units" exact={true}>
          <div>units</div>
        </Route>

        <Route path="/units/buttons">
          <Buttons />
        </Route>
        
      </Switch>
  );
}

Units.defaultProps = {
  
};

export default Units;
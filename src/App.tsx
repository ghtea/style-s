import * as React from "react";
import "./styles.css";

type PropsApp = { message: string }; /* could also use interface */

const App = ({ message }: PropsApp) => {
  return (
    <div className="App">
      <div>hello</div>
      <div>{message}</div>
    </div>
  );
};

export default App;

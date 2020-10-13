import * as React from "react";
import "./styles.css";

// https://www.sitepoint.com/react-with-typescript-best-practices/
// https://github.com/typescript-cheatsheets/react

type PropsApp = { message: string }; /* could also use interface */

const App = ({ message }: PropsApp) => {
  // automatically only boolean
  const [val, toggle] = React.useState(false);

  type User = {
    email: string;
    id: string;
  };

  // the generic is the < >
  // the union is the User | null
  // together, TypeScript knows, "Ah, user can be User or null".
  const [user, setUser] = React.useState<User | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <div>hello</div>
      <div>{message}</div>
    </div>
  );
};

export default App;

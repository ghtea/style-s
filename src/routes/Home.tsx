import React, {useCallback} from "react";
import { useHistory } from "react-router-dom";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Home from "./Home.module.scss";

const cn_Home = classNames.bind(styles_Home);

type PropsHome = {};

function Home({}: PropsHome) {

  const history = useHistory();

  const onClick_Link = useCallback(
    (
      event: React.ChangeEvent<
        HTMLDivElement | HTMLButtonElement | HTMLAnchorElement
      >,
      destination: string
    ) => {
      console.log(`going to ${destination}`);
      history.push(destination);
    },
    []
  );

  return (
    <div className={cn_Home("root")}>
      
      <div className={cn_Home("group", "basic")}>

        <div
          className={cn_Home("item", "buttons")}
          onClick={(event) => onClick_Link(event, "/works/buttons")}
        >
          buttons
        </div>

      </div>


      <div className={cn_Home("group", "input")}>

        <div
          className={cn_Home("item", "inputs-text")}
          onClick={(event) => onClick_Link(event, "/works/inputs-text")}
        >
          inputs: text
        </div>

        
        <div
          className={cn_Home("item", "inputs-range")}
          onClick={(event) => onClick_Link(event, "/works/inputs-range")}
        >
          inputs: range
        </div>

        
        <div
          className={cn_Home("item", "inputs-checkbox")}
          onClick={(event) => onClick_Link(event, "/works/inputs-checkbox")}
        >
          inputs: checkbox
        </div>

      </div>

      <div className={cn_Home("group", "animation")}>
        
        <div
          className={cn_Home("item", "rotate")}
          onClick={(event) => onClick_Link(event, "/works/rotate")}
        >
          animation: rotate
        </div>

      </div>


      <div className={cn_Home("group", "big")}>
        
        <div
          className={cn_Home("item", "sidebar")}
          onClick={(event) => onClick_Link(event, "/works/sidebar")}
        >
          sidebar
        </div>

        <div
          className={cn_Home("item", "top-menu")}
          onClick={(event) => onClick_Link(event, "/works/top-menu")}
        >
          top menu
        </div>

      </div>


    </div>
  );
}

Home.defaultProps = {};

export default Home;

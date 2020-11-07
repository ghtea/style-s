import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./Home.module.scss";

const cn_root = classNames.bind(styles_root);

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
    <div className={cn_root("root")}>
      <div className={cn_root("group", "basic")}>
        <div
          className={cn_root("item", "buttons")}
          onClick={(event) => onClick_Link(event, "/works/buttons")}
        >
          buttons
        </div>
        <div
          className={cn_root("item", "action")}
          onClick={(event) => onClick_Link(event, "/works/action")}
        >
          action
        </div>
        <div
          className={cn_root("item", "share")}
          onClick={(event) => onClick_Link(event, "/works/share")}
        >
          share
        </div>
      </div>

      <div className={cn_root("group", "input")}>
        <div
          className={cn_root("item", "inputs-text")}
          onClick={(event) => onClick_Link(event, "/works/inputs-text")}
        >
          inputs: text
        </div>

        <div
          className={cn_root("item", "inputs-range")}
          onClick={(event) => onClick_Link(event, "/works/inputs-range")}
        >
          inputs: range
        </div>

        <div
          className={cn_root("item", "inputs-checkbox")}
          onClick={(event) => onClick_Link(event, "/works/inputs-checkbox")}
        >
          inputs: checkbox
        </div>
      </div>

      <div className={cn_root("group", "effect")}>
        <div
          className={cn_root("item", "rotate")}
          onClick={(event) => onClick_Link(event, "/works/rotate")}
        >
          animation: rotate
        </div>
      </div>

      <div className={cn_root("group", "big")}>
        <div
          className={cn_root("item", "nav")}
          onClick={(event) => onClick_Link(event, "/works/nav")}
        >
          nav
        </div>

        <div
          className={cn_root("item", "top-menu")}
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

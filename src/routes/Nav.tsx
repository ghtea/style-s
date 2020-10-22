import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Nav from "./Nav.module.scss";

const cn_Nav = classNames.bind(styles_Nav);

type PropsNav = {};

function Nav({}: PropsNav) {
  const history = useHistory();

  const onClick_Link = useCallback(
    (
      event: React.ChangeEvent<
        HTMLDivElement | HTMLButtonElement | HTMLAnchorElement
      >,
      destination: string
    ) => {
      console.log(`${name} says hello`);
      history.push(destination);
    },
    []
  );
  

  // button, input, hover (popup), nav, sidebar
  return (
    <nav className={cn_Nav("root")}>
      <div className={cn_Nav("collection_tools", "left")}>
        <div> info </div>
      </div>

      <div className={cn_Nav("collection_links")}>
        <div
          className={cn_Nav("link")}
          onClick={(event) => onClick_Link(event, "/works/buttons")}
        >
          button
        </div>

        <div
          className={cn_Nav("link")}
          onClick={(event) => onClick_Link(event, "/works/navs")}
        >
          nav
        </div>
      </div>

      <div className={cn_Nav("collection_tools", "right")}>
        <div>view all</div>
      </div>
    </nav>
  );
}

Nav.defaultProps = {};

export default Nav;

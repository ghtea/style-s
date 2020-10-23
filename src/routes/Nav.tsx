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
      <div className={cn_Nav("collection_others", "left")}>
        <div> Style S </div>
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
          onClick={(event) => onClick_Link(event, "/works/input-text")}
        >
          input-text
        </div>

        <div
          className={cn_Nav("link")}
          onClick={(event) => onClick_Link(event, "/works/input-range")}
        >
          input-range
        </div>

        <div
          className={cn_Nav("link")}
          onClick={(event) => onClick_Link(event, "/works/input-checkbox")}
        >
          input-checkbox
        </div>

        <div
          className={cn_Nav("link")}
          onClick={(event) => onClick_Link(event, "/works/input-radio")}
        >
          input-radio
        </div>

        <div
          className={cn_Nav("link")}
          onClick={(event) => onClick_Link(event, "/works/animation")}
        >
          animation
        </div>


      </div>

      <div className={cn_Nav("collection_others", "right")}>
        <div>nav bar</div>
      </div>
    </nav>
  );
}

Nav.defaultProps = {};

export default Nav;

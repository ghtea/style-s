import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Nav from "./Nav.module.scss";

import IconHome from "../components/Works/Nav/icon/Home";
import IconDesigner from "../components/Works/Nav/icon/Designer";


const cn_Nav = classNames.bind(styles_Nav);


type PropsNav = {};

function Nav({}: PropsNav) {
  const history = useHistory();
  const location = useLocation();

  // useMemo 와 typescript 어떻게 같이 잘 활용하는지 모르겠다..
  const title = useMemo((): string => {
    if (location.pathname === "/") {
      return "Style S";
    } else {
      const regex = /^\/(\w*)\/(\w*)/;
      const raw = location.pathname;
      const match = raw.match(regex)

      return match[2];
    }
  }, [location]);

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

  // button, input, hover (popup), nav, sidebar
  return (
    <nav className={cn_Nav("root")}>
      <div className={cn_Nav("left")}>
        <div
          className={cn_Nav("home")}
          onClick={(event) => onClick_Link(event, "/")}
        >
          <IconHome
            width={"28px"}
            height={"28px"}
            transform={""}
          />
          
        </div>
      </div>

      <div className={cn_Nav("middle")}>
        <div> {title}</div>
      </div>

      <div className={cn_Nav("right")}>
        <div
          className={cn_Nav("designer")}
          onClick={(event) => onClick_Link(event, "/")}
        > 
          <IconDesigner
            width={"29px"}
            height={"29px"}
            transform={""}
          /> 
        </div>
      </div>
    </nav>
  );
}

Nav.defaultProps = {};

export default Nav;

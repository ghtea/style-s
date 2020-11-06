import React from "react";

import WorkNav1 from './Nav/WorkNav1';


import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./Nav.module.scss";
// css module not works yet

type PropsNav = {};

const cn_root = classNames.bind(styles_root);

function Nav({}: PropsNav) {
  return (
    <div className={cn_root("collection")}>
    
      <WorkNav1/>

    </div>
  );
}

Nav.defaultProps = {};

export default Nav;

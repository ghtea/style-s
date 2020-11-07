import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./WorkNav1.module.scss";
// css module not works yet

type PropsWorkNav1 = {};

const cn_root = classNames.bind(styles_root);

function WorkNav1({}: PropsWorkNav1) {
  return (
    <div className={cn_root("body")}>

      <div className={cn_root("sidebar")}>
        <div>Home</div>
        <div>Products</div>
        <div>Details</div>
        <div>Where to buy</div>
        <div>Contact</div>
        <div>About</div>
      </div>

      <input type="checkbox" className={cn_root("sidebar-btn")} checked/>
      <label for="sidebar-btn"></label>

      <div className={cn_root("content")}>
        <h1>Flat CSS Sidebar</h1>
      </div>

    </div>
  );
}

WorkNav1.defaultProps = {};

export default WorkNav1;

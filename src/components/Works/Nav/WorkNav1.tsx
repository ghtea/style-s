import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./WorkNav1.module.scss";
// css module not works yet

type PropsWorkNav1 = {};

const cn_root = classNames.bind(styles_root);

// focused on studying gpower of css not js
function WorkNav1({}: PropsWorkNav1) {
  return (
    <div className={cn_root("body")}>
      
      <div className={cn_root("sidebar")}>
        <div>Home</div>
        <div>Products</div>
        <div>Details</div>
        <div>Details</div>
      </div>

      <input
        type="checkbox"
        id="button__toggle-sidebar"
        className={cn_root("button__toggle-sidebar")}
      />
      <label htmlFor="button__toggle-sidebar"></label>

      <div className={cn_root("content")}>
        <h1>Flat CSS Sidebar</h1>
        <div>ddddddddddddddddddddddd</div>
      </div>
    </div>
  );
}

WorkNav1.defaultProps = {};

export default WorkNav1;

import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./Buttons.module.scss";
// css module not works yet

type PropsButtons = {};

const cn_root = classNames.bind(styles_root);

function Buttons({}: PropsButtons) {
  return (
    <div className={cn_root("collection")}>

      <div className={cn_root("default", "item1")}>
        <button> button 1 </button>
      </div>


    </div>
  );
}

Buttons.defaultProps = {};

export default Buttons;

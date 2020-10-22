import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Buttons from "./Buttons.module.scss";
// css module not works yet

type PropsButtons = {};

const cn_Buttons = classNames.bind(styles_Buttons);

function Buttons({}: PropsButtons) {
  return (
    <div className={cn_Buttons("collection")}>

      <div className={cn_Buttons("default", "item1")}>
        <button> button 1 </button>
      </div>


    </div>
  );
}

Buttons.defaultProps = {};

export default Buttons;

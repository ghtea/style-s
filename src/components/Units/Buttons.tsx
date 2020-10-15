import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles from "./Buttons.module.scss";
// css module not works yet

type PropsButtons = {};

const cx = classNames.bind(styles);

function Buttons({}: PropsButtons) {
  return (
    <div className={cx("collection_button")}>
      <div>
        <button className={cx("button_1", "button_common")}> button 1 </button>
      </div>

      <div>
        <button className={cx("button_2", "button_common")}> button 2 </button>
      </div>
    </div>
  );
}

Buttons.defaultProps = {};

export default Buttons;

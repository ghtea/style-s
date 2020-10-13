import React from "react";
import styles from "./Buttons.scss"; // .css not work
// css module not works yet

type PropsButtons = {};

function Buttons({}: PropsButtons) {
  return (
    <div className="container-button">
      <button className={styles.button__1}>button1</button>
    </div>
  );
}

Buttons.defaultProps = {};

export default Buttons;

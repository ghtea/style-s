import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./WorkAction1.module.scss";
// css module not works yet

type PropsWorkAction1 = {};

const cn_root = classNames.bind(styles_root);

function WorkAction1({}: PropsWorkAction1) {
  return (
    <div className={cn_root("root")}>
      action1
    </div>
  );
}

WorkAction1.defaultProps = {};

export default WorkAction1;

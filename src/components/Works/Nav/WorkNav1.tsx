import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./WorkNav1.module.scss";
// css module not works yet

type PropsWorkNav1 = {};

const cn_root = classNames.bind(styles_root);

function WorkNav1({}: PropsWorkNav1) {
  return (
    <div className={cn_root("work")}>
      
    </div>
  );
}

WorkNav1.defaultProps = {};

export default WorkNav1;

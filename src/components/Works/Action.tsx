import React from "react";

import WorkAction1 from "./Action/WorkAction1";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./Action.module.scss";
// css module not works yet

type PropsAction = {};

const cn_root = classNames.bind(styles_root);

function Action({}: PropsAction) {
  return (
    <div className={cn_root("collection")}>
      <WorkAction1 />
    </div>
  );
}

Action.defaultProps = {};

export default Action;

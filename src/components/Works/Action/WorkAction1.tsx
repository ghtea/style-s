import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./WorkAction1.module.scss";
// css module not works yet

type PropsWorkAction1 = {};

const cn_root = classNames.bind(styles_root);

function WorkAction1({}: PropsWorkAction1) {
  return (
    <div className={cn_root("root")}>
      <div className={cn_root("object", "top")} data-tooltip="I’m the tooltip text.">
        top
      </div>
      <div className={cn_root("object", "right")} data-tooltip="I’m the tooltip text.">
        right
      </div>
      <div className={cn_root("object", "bottom")} data-tooltip="I’m the tooltip text.">
        bottom
      </div>
      <div className={cn_root("object", "left")} data-tooltip="I’m the tooltip text.">
        left
      </div>
    </div>
  );
}

WorkAction1.defaultProps = {};

export default WorkAction1;

import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Social1 from "./Social1.module.scss";
// css module not works yet

type PropsSocial1 = {};

const cn_Social1 = classNames.bind(styles_Social1);

function Social1({}: PropsSocial1) {
  return (
    <div className={cn_Social1("default", "item1")}>
      <div>socials</div>
    </div>

  );
}

Social1.defaultProps = {};

export default Social1;
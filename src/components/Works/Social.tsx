import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Social from "./Social.module.scss";
// css module not works yet

type PropsSocial = {};

const cn_Social = classNames.bind(styles_Social);

function Social({}: PropsSocial) {
  return (
    <div className={cn_Social("collection")}>

      <div className={cn_Social("default", "item1")}>
        <div>socials</div>
      </div>


    </div>
  );
}

Social.defaultProps = {};

export default Social;

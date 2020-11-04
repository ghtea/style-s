import React from "react";

import Social1 from './Social/Social1';

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Social from "./Social.module.scss";
// css module not works yet

type PropsSocial = {};

const cn_Social = classNames.bind(styles_Social);

function Social({}: PropsSocial) {
  return (
    <div className={cn_Social("collection")}>

      <div className={cn_Social("default", "item1")}>
        <Social1/>
      </div>


    </div>
  );
}

Social.defaultProps = {};

export default Social;

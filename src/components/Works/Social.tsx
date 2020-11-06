import React from "react";

import WorkSocial1 from './Social/WorkSocial1';
import WorkSocial2 from './Social/WorkSocial2';

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./Social.module.scss";
// css module not works yet

type PropsSocial = {};

const cn_root = classNames.bind(styles_root);

function Social({}: PropsSocial) {
  return (
    <div className={cn_root("collection")}>
    
      <WorkSocial1/>
      <WorkSocial2/>

    </div>
  );
}

Social.defaultProps = {};

export default Social;

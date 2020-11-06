import React from "react";

import WorkShare1 from './Share/WorkShare1';
import WorkShare2 from './Share/WorkShare2';

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./Share.module.scss";
// css module not works yet

type PropsShare = {};

const cn_root = classNames.bind(styles_root);

function Share({}: PropsShare) {
  return (
    <div className={cn_root("collection")}>
    
      <WorkShare1/>
      <WorkShare2/>

    </div>
  );
}

Share.defaultProps = {};

export default Share;

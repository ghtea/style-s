import React from "react";

import IconFacebook from "./icon/Facebook";
import IconGithub from "./icon/Github";
import IconGooglePlus from "./icon/GooglePlus";
import IconPinterest from "./icon/Pinterest";
import IconTumblr from "./icon/Tumblr";
import IconTwitter from "./icon/Twitter";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./WorkShare2.module.scss";
// css module not works yet

type PropsWorkShare2 = {};

const cn_root = classNames.bind(styles_root);

function WorkShare2({}: PropsWorkShare2) {
  return (
    <div className={cn_root("work")}>
      <div className={cn_root("container")}>
        
        WorkShare2
        
      </div>
    </div>
  );
}

WorkShare2.defaultProps = {};

export default WorkShare2;

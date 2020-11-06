import React from "react";

import IconFacebook from "./icon/Facebook";
import IconGithub from "./icon/Github";
import IconGooglePlus from "./icon/GooglePlus";
import IconPinterest from "./icon/Pinterest";
import IconTumblr from "./icon/Tumblr";
import IconTwitter from "./icon/Twitter";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_root from "./WorkSocial1.module.scss";
// css module not works yet

type PropsWorkSocial1 = {};

const cn_root = classNames.bind(styles_root);

function WorkSocial1({}: PropsWorkSocial1) {
  return (
    <div className={cn_root("work")}>
      <div className={cn_root("container")}>
        <div className={cn_root("front")}>
          <p className="share-button__text">Share</p>
        </div>

        <div className={cn_root("back")}>
          <button className={cn_root("button-each-service", "facebook")}>
            <IconFacebook
              width={"22px"}
              height={"22px"}
              color={"#fff"}
              transform={""}
            />
          </button>

          <button className={cn_root("button-each-service", "twitter")}>
            <IconTwitter
              width={"20px"}
              height={"20px"}
              color={"#fff"}
              transform={""}
            />
          </button>

          <button className={cn_root("button-each-service", "google-plus")}>
            <IconGooglePlus
              width={"26px"}
              height={"26px"}
              color={"#fff"}
              transform={""}
            />
          </button>

          <button className={cn_root("button-each-service", "pinterest")}>
            <IconPinterest
              width={"22px"}
              height={"22px"}
              color={"#fff"}
              transform={""}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

WorkSocial1.defaultProps = {};

export default WorkSocial1;

import React from "react";


import IconFacebook from './icon/Facebook';
import IconGithub from './icon/Github';
import IconGooglePlus from './icon/GooglePlus'
import IconKakaoTalk from './icon/KakaoTalk';
import IconPinterest from './icon/Pinterest';
import IconTumblr from './icon/Tumblr';
import IconTwitter from './icon/Twitter';

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Social1 from "./Social1.module.scss";
// css module not works yet

type PropsSocial1 = {};

const cn_Social1 = classNames.bind(styles_Social1);

function Social1({}: PropsSocial1) {
  return (
    <div className={cn_Social1("default", "item1")}>


      <div className="share-button">

        <div className="share-button__front">
          <p className="share-button__text">Share</p>
        </div>

        <div className="share-button__back">
          <a className="share__link" href="#" title="twitter">
            twitter
          </a>

          <a className="share__link " href="#" title="facebook">
            facebook
          </a>

          <a className="share__link" href="#" title="google plus">
            google plus
          </a>

          <a className="share__link" href="#" title="dribbble">
            dribbble
          </a>

        </div>
      </div>
 
    </div>
  );
}

Social1.defaultProps = {};

export default Social1;
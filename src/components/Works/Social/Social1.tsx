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
    <div className={cn_Social1("item")}>

        <div className={cn_Social1("front")}>
          <p className="share-button__text">Share</p>
        </div>

        <div className={cn_Social1("back")}>

          <button className={cn_Social1("button-each-service")} >
            <IconFacebook
              width={'24px'}
              height={'24px'}
              color={'#f28'}
              transform={''}
            />
          </button>

          <button className={cn_Social1("button-each-service")} >
            <IconTwitter
              width={'24px'}
              height={'24px'}
              color={'#f28'}
              transform={''}
            />
          </button>


          <button className={cn_Social1("button-each-service")} >
            <IconGooglePlus
              width={'24px'}
              height={'24px'}
              color={'#f28'}
              transform={''}
            />
          </button>

          <button className={cn_Social1("button-each-service")} >
            <IconKakaoTalk
              width={'24px'}
              height={'24px'}
              color={'#f28'}
              transform={''}
            />
          </button>

        </div>
 
    </div>
  );
}

Social1.defaultProps = {};

export default Social1;
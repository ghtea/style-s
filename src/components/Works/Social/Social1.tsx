import React from "react";

import IconTwitter from './icon/Twitter';
import IconFacebook from './icon/Facebook';
import IconGithub from './icon/Github';
import IconGooglePlus from './icon/GooglePlus'

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Social1 from "./Social1.module.scss";
// css module not works yet

type PropsSocial1 = {};

const cn_Social1 = classNames.bind(styles_Social1);

function Social1({}: PropsSocial1) {
  return (
    <div className={cn_Social1("default", "item1")}>
      <div>
        <IconTwitter
          width={'30px'}
          height={'30px'}
          color={'#f28'}
          transform={''}
        />
        <IconFacebook
          width={'24px'}
          height={'24px'}
          color={'#f28'}
          transform={''}
        />
        <IconGithub
          width={'30px'}
          height={'30px'}
          color={'#f28'}
          transform={''}
        />
        <IconGooglePlus
          width={'36px'}
          height={'36px'}
          color={'#f28'}
          transform={''}
        />
      </div>
    </div>
  );
}

Social1.defaultProps = {};

export default Social1;
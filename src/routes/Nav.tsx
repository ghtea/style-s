import React from "react";
import classNames from "classnames/bind"; // easy to forget bind!
import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

type PropsNav = {
  
};

function Nav({ }: PropsNav) {
  
  return (
    <nav className={cx('nav_reset')}>
      nav
    </nav>
  );
}

Nav.defaultProps = {
  
};

export default Nav;
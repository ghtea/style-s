import React from "react";
import classNames from "classnames/bind"; // easy to forget bind!
import styles_Nav from "./Nav.module.scss";

const cn_Nav = classNames.bind(styles_Nav);

type PropsNav = {
  
};

function Nav({ }: PropsNav) {
  
  return (
    <nav className={cn_Nav('root')}>
      <div className={cn_Nav('collection_links')}>
         <div>link1</div>
         <div>link2</div>
      </div>
      <div className={cn_Nav('collection_tools')}>
         <div>tool1</div>
         <div>tool2</div>
      </div>
    </nav>
  );
}

Nav.defaultProps = {
  
};

export default Nav;
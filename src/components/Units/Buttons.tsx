import React from "react";
import './Buttons.scss'; // .css not work

type PropsButtons = {
  
};

function Buttons({ }: PropsButtons) {
  
  return (
    <div className='container-button'>
      <button className='button--1'>button1</button>
    </div>
  );
}

Buttons.defaultProps = {
  
};

export default Buttons;
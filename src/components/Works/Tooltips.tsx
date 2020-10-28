import React from "react";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Tooltips from "./Tooltips.module.scss";
// css module not works yet

type PropsTooltips = {};

const cn_Tooltips = classNames.bind(styles_Tooltips);

function Tooltips({}: PropsTooltips) {
  return (
    <div className={cn_Tooltips("collection")}>

        <div className="basic">
      
        <p><a href="#" className="tooltip-top" data-tooltip="I’m the tooltip text.">top</a></p>
          <p><a href="#" className="tooltip-right" data-tooltip="I’m the tooltip text.">right</a></p>
          <p><a href="#" className="tooltip-bottom" data-tooltip="I’m the tooltip text.">bottom</a></p>
          <p><a href="#" className="tooltip-left" data-tooltip="I’m the tooltip text.">left</a> </p>

        </div>


    </div>
  );
}

Tooltips.defaultProps = {};

export default Tooltips;


// four direction   https://codepen.io/cbracco/pen/nufHz
// animation https://codepen.io/sashatran/pen/KaYYBz/
import React from "react";

type PropsIcon = {
  width: string;
  height: string;
  color: string;
  transform: string;
} & typeof defaultProps;

const defaultProps = {
  width: '100%',
	height: '100%',
	color: '#ffffff',
	transform: ''
};

type StyleIcon = {
  width: string;
  height: string;
  transform: string;
  display: string;
  flexFlow: string;
  justifyContent: string;
  alignItems: string;
};

// 진행중
//https://infoscis.github.io/2017/05/20/TypeScript-handbook-interfaces/

// Home
const Icon = ({ width, height, color, transform }: PropsIcon) => {
  return (
    <div
      style={
        {
          width: `${width}`,
          height: `${height}`,
          transform: `${transform}`,
          display: "flexbox",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center"
        } as StyleIcon
      }
    >
      <svg
        width="100%"
        height="100%"
        fill="currentColor"
        className=""
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path 
          d="M570.24 215.42L323.87 13a56 56 0 0 0-71.75 0L5.76 215.42a16 16 0 0 0-2 22.54L14 250.26a16 16 0 0 0 22.53 2L64 229.71V288h-.31v208a16.13 16.13 0 0 0 16.1 16H496a16 16 0 0 0 16-16V229.71l27.5 22.59a16 16 0 0 0 22.53-2l10.26-12.3a16 16 0 0 0-2.05-22.58zM464 224h-.21v240H352V320a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v144H111.69V194.48l.31-.25v-4L288 45.65l176 144.62z">
        </path>
      </svg>
    </div>
  );
};
Icon.defaultProps = defaultProps;
//

export default Icon;

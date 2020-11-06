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


// color 는   ' & > div {color: red;} ' 등으로 

// Designer (user-crown-regular)
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
        viewBox="0 0 448 512"
      >
        <path 
          d="M224 288c70.7 0 128-57.31 128-128V0l-64 32-64-32-64 32L96 0v160c0 70.69 57.31 128 128 128zm-80-160h160v32c0 44.11-35.89 80-80 80s-80-35.89-80-80v-32zm169.6 176c-11.04 0-21.78 2.6-32.2 6.24-18 6.28-37.28 9.76-57.4 9.76-20.11 0-39.4-3.48-57.39-9.76-10.42-3.64-21.17-6.24-32.21-6.24C60.17 304 0 364.17 0 438.4V464c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-25.6c0-74.23-60.17-134.4-134.4-134.4zM400 464H48v-25.6c0-47.64 38.76-86.4 86.4-86.4 4.18 0 9.53 1.16 16.38 3.55C174.44 363.81 199.07 368 224 368s49.56-4.19 73.22-12.45c6.85-2.39 12.21-3.55 16.38-3.55 47.64 0 86.4 38.76 86.4 86.4V464z">
        </path>
      </svg>
    </div>
  );
};
Icon.defaultProps = defaultProps;
//

export default Icon;

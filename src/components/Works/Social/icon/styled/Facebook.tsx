import React from "react";

type PropsIcon = {
  width: string;
  height: string;
  color: string;
  transform: string;
};

type StyleIcon = {
  width: string;
  height: string;
  transform: string;
  display: string;
  flexFlow: string;
  justifyContent: string;
  alignItems: string;
}

// 진행중
//https://infoscis.github.io/2017/05/20/TypeScript-handbook-interfaces/

// Facebook
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
        fill={color}
        className=""
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>
    </div>
  );
};

//

export default Icon;

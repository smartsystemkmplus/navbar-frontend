import React from "react";

function CircleSvg({ color = "#016DB2", size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7"
        cy="7"
        r="5.75"
        fill="white"
        stroke={color}
        strokeWidth="2.5"
      />
    </svg>
  );
}

export default CircleSvg;

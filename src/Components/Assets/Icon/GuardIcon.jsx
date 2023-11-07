import React from "react";

export default function GuardIcon({ color = "#003F80" }) {
  return (
    <svg
      width="48"
      height="60"
      viewBox="0 0 48 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 27.3307V12.6305L24 2.8527L46 12.6305V27.3307C46 41.1187 36.5508 53.9435 24 57.2671C11.4492 53.9435 2 41.1187 2 27.3307Z"
        fill="white"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
}

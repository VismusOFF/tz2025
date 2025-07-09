// ArrowRight.jsx
import React from "react";

const ArrowRight = () => (
  <svg
    className="arrow-svg"
    width="48"
    height="20"
    viewBox="0 0 48 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <mask
        id="mask0"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="20"
      >
        <path
          d="M38 20C43.5228 20 48 15.5228 48 10C48 4.47715 43.5228 0 38 0L10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20L38 20Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          className="arrow-bg"
          d="M38 20C43.5228 20 48 15.5228 48 10C48 4.47715 43.5228 0 38 0L10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20L38 20Z"
          fill="#F6F6F6"
        />
        <path
          className="arrow-stroke1"
          d="M34 0C34 5.52285 38.4771 10 44 10"
          stroke="#2E2D2B"
          strokeWidth="2"
        />
        <path
          className="arrow-stroke2"
          d="M33.875 20C33.875 14.4772 38.3521 10 43.875 10H44H-10"
          stroke="#2E2D2B"
          strokeWidth="2"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="48"
          height="20"
          fill="white"
          transform="matrix(-1 0 0 1 48 0)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowRight;

import React from "react";

function BarsIcon(menu) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-7 w-6 stroke-black dark:stroke-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={`${
          menu
            ? "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            : "M6 18L18 6M6 6l12 12"
        }`}
      />
    </svg>
  );
}

export default BarsIcon;

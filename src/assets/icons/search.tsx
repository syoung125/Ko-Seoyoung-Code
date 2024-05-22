import React from "react";

import { useTheme } from "styled-components";

import { IconProps } from ".";

function SearchIcon({ style, fill }: IconProps) {
  const { colors } = useTheme();

  return (
    <svg
      style={{ width: "1.4rem", height: "1.4rem", ...style }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || colors.scheme.$white}
    >
      <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z" />
    </svg>
  );
}

export default React.memo(SearchIcon);

import { keyframes } from "styled-components";

export const TurnAnimation = keyframes`
from {
    transform: rotate(0deg);
}
to{
    transform: rotate(180deg);
}
`;

export const moveInLeft = keyframes`
${"70%"} {
    opacity: 0;
    transform: translateX(-10rem);
}

${"100%"} {
    opacity: 1;
    transform: translate(0);
}
`;
export const Rotate = keyframes`    
${"100%"} {
    transform: rotate(360deg);
  }`;

export const Dash = keyframes`  
${"0%"} {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  ${"50%"} {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  ${"100%"} {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }`;

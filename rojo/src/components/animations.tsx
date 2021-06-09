import { keyframes } from "styled-components";

export const TurnAnimation = keyframes`
from {
    transform: rotate(0deg);
}
to{
    transform: rotate(180deg);
}
`;

export const Spin = keyframes`
from {

        transform: rotate(0deg);
}
to{

        transform: rotate(360deg);
    }
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

export const Glow = keyframes`
    from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
  `;

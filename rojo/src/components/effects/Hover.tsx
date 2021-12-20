import { useState } from "react";
import styled from "styled-components";

interface HoverProps {
  children?: any;
  hovering?: boolean;
  background?: string;
  gradient?: string;
  x: number;
  y: number;
}

const HoverContainer = styled.div<HoverProps>`
  background: ${(props) => (props.hovering ? "-webkit-radial-gradient(" + props.x + "px " + props.y + "px" + ",circle," + props.gradient + ", " + props.background + " 100px)" : props.background)};
  z-index: 2;
`;

interface RadientHoverProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  gradientColor?: string;
}

export const RadientHover = (props: RadientHoverProps) => {
  const [inElemnt, setInElement] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [debug, setDebug] = useState("");

  let mouseEnter = () => {
    setInElement(true);
    setDebug("enter");
  };

  let mouseLeave = () => {
    setInElement(false);
    setDebug("leaves");
  };

  let mouseMove = (e: any) => {
    setX(e.clientX - e.target.offsetLeft);
    setY(e.clientY - e.target.offsetTop);
  };
  return (
    <HoverContainer gradient={props.gradientColor} background={props.backgroundColor} x={x} y={y} hovering={inElemnt} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={mouseMove}>
      <div>{props.children}</div>
    </HoverContainer>
  );
};

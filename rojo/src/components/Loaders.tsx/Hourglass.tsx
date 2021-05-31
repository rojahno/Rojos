import React from "react";
import styled, { keyframes } from "styled-components";
import Icon from "./../../images/hourglass.svg";

const turnAnimation = keyframes`
from {
    transform: rotate(0deg);
}
to{
    transform: rotate(180deg);
}
`;

interface HourglassProps {
  size?: string;
}
/**
 * @todo test the size of the component and implement color change.
 */
const HourglassImage = styled.img<HourglassProps>`
  width: ${(props) => (props.size ? props.size : "5em")};
  height: ${(props) => (props.size ? props.size : "5em")};
  animation-name: ${turnAnimation};
  animation-duration: 1500ms;
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
`;

export function Hourglass() {
  return (
    <div>
      <HourglassImage src={Icon} />
    </div>
  );
}

import styled from "styled-components";
import Icon from "./../../images/hourglass.svg";
import { TurnAnimation } from "../animations";

interface HourglassProps {
  size?: string;
  animationDuration?: string;
}
/**
 * @todo test the size of the component and implement color change.
 */
const HourglassImage = styled.img<HourglassProps>`
  width: ${(props) => (props.size ? props.size : "3em")};
  height: ${(props) => (props.size ? props.size : "3em")};
  animation-name: ${TurnAnimation};
  animation-duration: ${(props) => (props.animationDuration ? props.animationDuration  : "1250ms")};
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
`;

export function Hourglass() {
  return <HourglassImage src={Icon} />;
}

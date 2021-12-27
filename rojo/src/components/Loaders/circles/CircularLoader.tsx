import styled from "styled-components";
import { Rotate, Dash } from "../../animations";

interface SpinnerProps {
  color?: string;
}

const StyledSpinner = styled.svg<SpinnerProps>`
  animation: ${Rotate} 2s linear infinite;
  width: 5em;
  height: 5em;

  & .path {
    stroke: ${(props) => (props.color ? props.color : "#000000aa")};
    stroke-linecap: round;
    animation: ${Dash} 1.5s ease-in-out infinite;
  }
`;

const CircularLoader = (props: SpinnerProps) => (
  <StyledSpinner color={props.color} viewBox="0 0 50 50">
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
  </StyledSpinner>
);

export default CircularLoader;

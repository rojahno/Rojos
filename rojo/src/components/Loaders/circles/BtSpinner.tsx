import styled from "styled-components";
import { Spin } from "../../animations";
interface SpinnerProps {
  primaryColor?: string;
  secondaryColor?:string;
}
export const BtSpinner = styled.div<SpinnerProps>`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background-color: transparent;
  border: 0.3em solid ${(props) => (props.primaryColor ? props.primaryColor : "#000000aa")};
  border-top: 0.3em solid ${(props) => (props.secondaryColor ? props.secondaryColor : "#000070")};
  animation: 1s ${Spin} linear infinite;
`;

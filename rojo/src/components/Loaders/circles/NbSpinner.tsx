import styled from "styled-components";
import {Spin} from '../../animations'
 
interface SpinnerProps {
    color?:string;
}

export const NbSpinner = styled.div<SpinnerProps>`
  width: 50px;
  height: 50px;
  margin: 0;
  background: transparent;
  border-top: 4px solid ${(props) => (props.color ? props.color: "#000000aa")};;
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s ${Spin} linear infinite;
  animation: 1s ${Spin} linear infinite;
`;



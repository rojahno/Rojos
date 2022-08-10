import styled from "styled-components";
import { Spin } from "../../animations";

interface SpinnerProps {
    color?: string;
}

export const NbSpinner = styled.div<SpinnerProps>`
    width: 5em;
    height: 5em;
    margin: 0;
    background: transparent;
    border-top: 0.3em solid ${(props) => (props.color ? props.color : "#000000aa")};
    border-right: 0.3em solid transparent;
    border-radius: 50%;
    -webkit-animation: 1s ${Spin} linear infinite;
    animation: 1s ${Spin} linear infinite;
`;

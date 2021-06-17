import styled from "styled-components";
import { Spin } from "../../animations";
export const BtSpinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #222;
  border-top: 2px solid #03a9f4;
  animation: 1s ${Spin} linear infinite;
`;

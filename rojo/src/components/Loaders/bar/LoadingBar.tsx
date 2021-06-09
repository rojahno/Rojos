import styled, { keyframes } from "styled-components";

interface LoadingBarProps{
    text?:string;
}
const load = keyframes`
    0%{width: 0px;}
    70%{width: 100%; opacity: 1;}
    90%{opacity: 0; width: 100%;}
    100%{opacity: 0;width: 0px;}
`;

export const LoadingBar = styled.div<LoadingBarProps>`
  position: relative;
  width: 150px;
  height: 20px;
  text-align: center;
  color: aliceblue;

  :after {
    content: 'Loading...';
    color: #3c3c3c;
    font-family: Lato, "Helvetica Neue";
    font-weight: 200;
    font-size: 16px;
    position: absolute;
    width: 100%;
    height: 20px;
    line-height: 20px;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
  :before {
    content: "";
    position: absolute;
    background-color: #3c3c3c;
    top: -5px;
    left: 0px;
    height: 30px;
    width: 0px;
    z-index: 0;
    opacity: 1;
    transform-origin: 100% 0%;
    animation: ${load} 5s ease-in-out infinite;
  }
`;

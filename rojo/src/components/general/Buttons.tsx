import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  appearance: none;
  font-size: 1rem;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(111, 117, 133, 0.14);
  transition: transform ease-in 0.1s;

  &:hover {
    transform: scale(1.05);
  }
`;
interface NeonButtonProp {
  color?: string;
  bgColor?: string;
  reflection?: boolean;
}
export const NeonButton = styled.button<NeonButtonProp>`
  font-size: 4rem;

  display: inline-block;
  background-color: hsl(323 21% 16%);
  cursor: pointer;
  text-decoration: none;
  color: hsl(317 100% 54%);
  border: hsl(317 100% 54%) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 hsl(317 100% 54%), 0 0 0.5em 0 hsl(317 100% 54%);

  position: relative;

  &::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background-color: hsl(317 100% 54%);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em hsl(317 100% 54%);
    opacity: 0;
    background-color: hsl(323 21% 16%);
    color: hsl(317 100% 54%);
    z-index: -1;
    transition: opacity 100ms linear;
  }

  &:hover {
    background-color: hsl(317 100% 54%);
    color: hsl(323 21% 16%);
    text-shadow: none;
  }

  &:hover::before,
  :focus::before {
    opacity: 1;
  }

  &:hover::after,
  :focus::after {
    opacity: 1;
    background-color: hsl(323 21% 16%);
    color: hsl(317 100% 54%);
  }
`;

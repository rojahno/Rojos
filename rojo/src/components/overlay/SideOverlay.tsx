import { useState } from "react";
import styled from "styled-components";

interface SideNavProps {
  width?: string;
  position?: string;
  moveRight?: boolean;
  buttonText?: string;
}

const SideNav = styled.div<SideNavProps>`
  height: 100%; /* 100% Full-height */
  width: ${(props) => (props.width ? props.width : "25hv")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  left: ${(props) => (props.moveRight ? "" : "0")};
  right: ${(props) => (props.moveRight ? "0" : "")};
  top: 0; /* Stay at the top */

  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */

  display: flex;
  flex-direction: column;
`;

interface CloseButtonProps {
  right?: boolean;
}

const CloseButton = styled.a<CloseButtonProps>`
  display: flex;
  justify-content: ${(props) => (props.right ? "flex-start" : "flex-end")};
  font-size: 3vh;
  width: 90%;
  color: #818181;
  padding: 0em 0em;
  transition: 0.3s;

  &:hover {
    color: #f1f1f1;
  }
`;

const SideLinks = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

  &:hover {
    color: #f1f1f1;
  }
`;

const StyledButton = styled.button`
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

export const SideOverlay = (props: SideNavProps) => {
  const [width, setWidth] = useState("0px");

  const showOverlay = () => {
    setWidth("250px");
  };

  const hideOverlay = () => {
    setWidth("0px");
  };
  return (
    <div>
      <StyledButton onClick={showOverlay}>{props.buttonText}</StyledButton>
      <SideNav width={width} moveRight={props.moveRight}>
        <CloseButton right={props.moveRight} onClick={hideOverlay}>
          X
        </CloseButton>
        <SideLinks>Home</SideLinks>
        <SideLinks>Contact</SideLinks>
        <SideLinks>Mail</SideLinks>
        <SideLinks>Info</SideLinks>
        <SideLinks>About</SideLinks>
      </SideNav>
    </div>
  );
};

import { useState } from "react";
import styled from "styled-components";

interface SideNavProps {
  width?: string;
}

const SideNav = styled.div<SideNavProps>`
  height: 100%; /* 100% Full-height */
  width: ${(props) => (props.width ? props.width : "0px")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
`;

const CloseButton = styled.a`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #818181;

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

  &:hover{
    color: #f1f1f1;
  }
`;

export const SideBar = () => {
  const [width, setWidth] = useState("0px");

  const showOverlay = () => {
    setWidth("250px");
  };

  const hideOverlay = () => {
    setWidth("0px");
  };
  return (
    <div>
      <button onClick={showOverlay}>Click for sidebar</button>
      <SideNav width={width}>
        <SideLinks>Home</SideLinks>
        <SideLinks>Contact</SideLinks>
        <SideLinks>Mail</SideLinks>
        <SideLinks>Info</SideLinks>
        <SideLinks>About</SideLinks>

        <CloseButton onClick={hideOverlay}>x</CloseButton>
      </SideNav>
    </div>
  );
};

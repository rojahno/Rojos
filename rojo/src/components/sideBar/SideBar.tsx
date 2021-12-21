import styled from "styled-components";

interface SideBarProps {
  children: any;
  borderRight?: boolean;
  centerX?: boolean;
  centerY?: boolean;
  width?: string;
}

const SideBarContent = styled.div<SideBarProps>`
  grid-column-start: sidebar;
  grid-column-end: content;
  margin: 0em 0;
  padding: 2em;
  width: 25%;
  border-right: ${(props) => (props.borderRight ? "#3c3c3c80 solid" : "")};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.centerY ? "center" : "stretch")};
  align-items: ${(props) => (props.centerX ? "center" : "flex-start")};
  background-color: #57999e;
`;

// eslint-disable-next-line
const SideBarLink = styled.a`
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;

  &:active {
    background-color: #3c3c3cbb;
    color: white;
  }

  &:hover:not(:active) {
    background-color: #555;
    color: white;
  }
`;

export const SideBar = (props: SideBarProps) => {
  return (
    <SideBarContent centerX={props.centerX} centerY={props.centerY}>
      {props.children}
    </SideBarContent>
  );
};

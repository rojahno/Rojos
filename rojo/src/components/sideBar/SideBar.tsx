import styled from "styled-components";

interface SideBarProps {}

const SideBarContent = styled.div`
  grid-column-start: sidebar;
  grid-column-end: content;
  margin: 2em 0;
  padding: 0em;
  width: 25vh;
  height: 100%;
  border-right: #3c3c3c80 solid;
`;

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

export const SideBar = () => {
  return (
    <SideBarContent>
      <SideBarLink>Home</SideBarLink>
      <SideBarLink>Components</SideBarLink>
      <SideBarLink>API</SideBarLink>
      <SideBarLink>Github</SideBarLink>
    </SideBarContent>
  );
};

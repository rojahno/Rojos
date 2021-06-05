import styled from "styled-components";

export const Header = styled.header<HeaderProps>`
  grid-row-start: header;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  display: flex;
  justify-content: ${(props) => (props.centered ? "center" : "")};
  align-items: ${(props) => (props.centered ? "center" : "")};
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: ${(props) => (props.padding ? props.padding : "0em")};
  position: ${(props) => (props.fixed ? "fixed" : "")};
  z-index: ${(props) => (props.fixed ? "fixed" : "")};
  width: ${(props) => (props.fixed ? "fixed" : "")};
`;

interface HeaderProps {
  centered?: boolean;
  height?: string;
  padding?: string;
  fixed?: boolean;
  color?: string;
}

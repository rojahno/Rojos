import styled from "styled-components";

export const Footer = styled.div<FooterProps>`
  grid-row-start: footer;
  background-color: ${(props) => (props.color ? props.color : "")};
  display: flex;
  justify-content: ${(props) => (props.centered ? "center" : "")};
  align-items: ${(props) => (props.centered ? "center" : "")};
  height: ${(props) => (props.height ? props.height : "4em")};
  padding: ${(props) => (props.padding ? props.padding : "1em")};
  margin: ${(props) => (props.padding ? props.padding : "0em")};
`;

interface FooterProps {
  centered?: boolean;
  height?: string;
  padding?: string;
  margin?: string;
  color?: string;
}

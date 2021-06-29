import styled from "styled-components";

export const Footer = styled.div<FooterProps>`
  grid-row-start: footer;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#fff")};
  display: flex;
  justify-content: ${(props) => (props.centered ? "center" : "")};
  align-items: ${(props) => (props.centered ? "center" : "")};
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: ${(props) => (props.padding ? props.padding : "0em")};
  margin: ${(props) => (props.padding ? props.padding : "0em")};
`;

interface FooterProps {
  centered?: boolean;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
}

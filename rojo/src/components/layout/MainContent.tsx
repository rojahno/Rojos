import styled from "styled-components";

interface ContentProps {
  centerY?: boolean;
  centerX?: boolean;
  height?: string;
  padding?: string;
  color?: string;
}

export const MainContent = styled.div<ContentProps>`
  grid-row-start: main-content;
  grid-row-end: footer;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.centerY ? "center" : "")};
  align-items: ${(props) => (props.centerX ? "center" : "")};
  height: ${(props) => (props.height ? props.height : "")};
  padding: ${(props) => (props.padding ? props.padding : "oem")};
`;

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

  grid-template-columns: [sidebar] auto [content] 1fr;

  background-color: ${(props) => (props.color ? props.color : "#fff")};
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.centerX ? "center" : "")};
  align-items: ${(props) => (props.centerY ? "center" : "")};
  height: ${(props) => (props.height ? props.height : "")};
  padding: ${(props) => (props.padding ? props.padding : "oem")};
`;
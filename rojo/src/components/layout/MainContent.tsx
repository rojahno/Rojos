import styled from "styled-components";

interface ContentProps {
  verticalCenter?: boolean;
  horizontalCenter?: boolean;
  height?: string;
  padding?: string;
}

export const MainContent = styled.div<ContentProps>`
  grid-row-start: main-content;
  grid-row-end: footer;
  background-color: #4977da;
  display: flex;
  justify-content: ${(props) => (props.horizontalCenter ? "center" : "")};
  align-items: ${(props) => (props.verticalCenter ? "center" : "")};
  height: ${(props) => (props.height ? props.height : "")};
  padding: ${(props) => (props.padding ? props.padding : "1em")};
`;

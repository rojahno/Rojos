import styled from "styled-components";

interface ContentProps {
  centerX?: boolean;
  centerY?: boolean;
}

export const Content = styled.div<ContentProps>`
  grid-column-start: content;
  max-width: 960px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centerX ? "center" : "center")};
  justify-content: ${(props) => (props.centerY ? "center" : "flex-start")};
`;

import styled from "styled-components";

interface ContentProps {
  centerX?: boolean;
  centerY?: boolean;
}

export const MaxWidthContent = styled.div<ContentProps>`
  grid-column-start: content;
  max-width: 960px;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centerX ? "center" : "center")};
  justify-content: ${(props) => (props.centerY ? "center" : "flex-start")};
`;

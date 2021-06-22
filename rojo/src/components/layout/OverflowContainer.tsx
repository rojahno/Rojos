import styled from "styled-components";

interface ScrollableContainerProps {
  centered?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  children: any;
  height?: string;
  width?: string;
}

/**
 * @description A scrollable container which centers the elements horizontaly and handles overflow.
 * Can be used if the container only has a set amount of space to work in.
 * @param props
 * @returns
 */

export const OverflowContainer = styled.div<ScrollableContainerProps>`
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "")};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

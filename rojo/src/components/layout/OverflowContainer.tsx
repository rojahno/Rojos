import React from "react";
import styled from "styled-components";

interface ScrollableContainerProps {
  centered?: boolean;
  maxWidth?: number;
  children: any;
}

interface ContentProps {
  padding?: string;
  margin?: string;
}
/**
   * 
   
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;
  */

/**
 * @description A scrollable container which centers the elements horizontaly and handles overflow.
 * Can be used if the container only has a set amount of space to work in.
 * @param props
 * @returns
 */
export function OverflowContainer(props: ScrollableContainerProps) {
  const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  `;

  return <Content>{props.children}</Content>;
}

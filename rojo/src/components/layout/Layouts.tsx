import React from "react";
import styled from "styled-components";

/**
 * @todo Check if i can merge the two containers together to one or if i should keep them seperate. Implement tests.
 */


interface SimpleContainerProps {
  children: any;
}

interface ContentProps {
  padding?: string;
  margin?: string;
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

/**
 * @description A simple container which centers the elements horizontaly.
 * @param props
 * @returns
 */
export function SimpleContainer(props: SimpleContainerProps) {
  const Content = styled.div<ContentProps>`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${(props) => (props.margin ? props.margin : "0em")};
    padding: ${(props) => (props.padding ? props.padding : "2em")};
  `;

  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
}

interface ScrollableContainerProps {
  centered?: boolean;
  maxWidth?: number;
  children: any;
}
/**
 * @description A scrollable container which centers the elements horizontaly and handles overflow.
 * Can be used if the container only has a set 
 * @param props
 * @returns
 */
export function OverflowContainer(props: ScrollableContainerProps) {
  const Content = styled.div<ContentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 0;
    flex-grow: 1;
    overflow: auto;
    width: 100%;
    margin: ${(props) => (props.margin ? props.margin : "0em")};
    padding: ${(props) => (props.padding ? props.padding : "2em")};
  `;

  return (
    <Container>
      <Content>{props.children}</Content>;
    </Container>
  );
}

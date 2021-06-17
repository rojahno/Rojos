import styled from "styled-components";

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
  margin: 0px;
  padding: 0px;
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
    align-items: center;
    margin: ${(props) => (props.margin ? props.margin : "0em")};
    padding: ${(props) => (props.padding ? props.padding : "0em")};
  `;

  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
}

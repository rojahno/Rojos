import styled from "styled-components";

interface ComponentExampleProps {
  children?: any;
  title?: string;
  backgroundColor?: string;
  padding?: string;
  verticalCenter?: boolean;
}

const Container = styled.div<ComponentExampleProps>`
  width: 100%;
  height: 100%;
  margin-top: 2em;
  padding: ${(props) => (props.padding ? props.padding : "")};
  /* border: solid #ffffffcc; */
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};
  display: ${(props) => (props.verticalCenter ? "flex" : "")};
  align-items: ${(props) => (props.verticalCenter ? "center" : "")};

`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  
`;
export const ComponentExample = (props: ComponentExampleProps) => {
  return (
    <Container backgroundColor={props.backgroundColor} padding={props.padding} verticalCenter={props.verticalCenter}>
      <ColumnContainer>{props.children}</ColumnContainer>
    </Container>
  );
};

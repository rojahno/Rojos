import styled from "styled-components";
import { Card } from "../cards/Card";

interface ComponentExampleProps {
  children?: any;
  title?: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2em;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ComponentExample = (props: ComponentExampleProps) => {
  return (
    <Container>
      <Card title={props.title}>
        <ColumnContainer>{props.children}</ColumnContainer>
      </Card>
    </Container>
  );
};

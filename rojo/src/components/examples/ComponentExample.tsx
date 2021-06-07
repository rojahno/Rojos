import styled from "styled-components";
import { Card } from "../cards/Card";
import { Container } from "../layout/Container";

interface ComponentExampleProps {
  title?: string;
}

const container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const ComponentExample = (props: ComponentExampleProps) => {
  return (
    <Card title={props.title}>
      <Container>
          
      </Container>
    </Card>
  );
};

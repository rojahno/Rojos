import styled from "styled-components";
import { Card } from "../cards/Card";
import { Content } from "../layout/Content";

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardExample = () => {
  return (
    <Content>
      <Card title={"Card example"}>
        <ExampleContainer>
          <h1>Cards</h1>

          <Card title={"Card Title"}>Card Content</Card>
          <h1>Hoverable</h1>
          <Card hoverable={true} title={"Hoverable card"}>
            Hover this element
          </Card>
        </ExampleContainer>
      </Card>
    </Content>
  );
};

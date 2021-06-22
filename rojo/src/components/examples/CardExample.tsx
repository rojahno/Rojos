import styled from "styled-components";
import { Card } from "../cards/Card";
import { Content } from "../layout/Content";
import { ComponentExample } from "./ComponentExample";

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardExample = () => {
  return (
    <ComponentExample title={"Card examples"}>
      <h1>Cards</h1>

      <Card width={"10em"} height={"7em"} title={"Card Title"}>
        Card Content
      </Card>
      <h1>Hoverable</h1>
      <Card width={"10em"} height={"7em"} hoverable={true} title={"Hoverable card"}>
        Hover this element
      </Card>
    </ComponentExample>
  );
};

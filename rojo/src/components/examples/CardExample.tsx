import { Card } from "../cards/Card";
import { Hourglass } from "../Loaders/Hourglass";
import { SideOverlay } from "../overlay/SideOverlay";
import { ExampleContainer } from "./ExampleContainer";

export const CardExample = () => {
  return (
    <ExampleContainer>
        <h1>Cards</h1>
      <Card title={"Title"}>
          <Hourglass/>
      </Card>
    </ExampleContainer>
  );
};

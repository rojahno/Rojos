import { SideOverlay } from "../overlay/SideOverlay";
import { ExampleContainer } from "./ExampleContainer";

export const OverlayExample = () => {
  return (
    <ExampleContainer>
      <h1>Overlay</h1>
      <SideOverlay buttonText={"Left overlay"} />
      <SideOverlay moveRight={true} buttonText={"Right overlay"} />
    </ExampleContainer>
  );
};

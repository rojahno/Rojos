import { SideOverlay } from "../../components/overlay/SideOverlay";
import { ComponentExample } from "./ComponentExample";

export const OverlayExample = () => {
  return (
    <ComponentExample title={"Example"}>
      <h1>Overlay</h1>
      <SideOverlay buttonText={"Left overlay"} />
      <SideOverlay moveRight={true} buttonText={"Right overlay"} />
    </ComponentExample>
  );
};

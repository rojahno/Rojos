import { Card } from "../cards/Card";
import { RadientHover } from "../effects/Hover";
import { ComponentExample } from "./ComponentExample";

export const EffectsExample = () => {
  return (
    <ComponentExample title={"Hover examples"}>
      <h1>Radient hover</h1>

      <Card>
        <RadientHover backgroundColor={"#3c3c3c"} gradientColor={"#ee1234"}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel officiis laboriosam praesentium quasi natus, ut veritatis fugiat dignissimos placeat non consectetur quibusdam ea accusamus
            deserunt nesciunt! Quibusdam iusto, unde eligendi suscipit omnis exercitationem voluptate voluptatibus dolores? Porro nostrum vel sint. Autem reprehenderit totam molestiae eaque dicta
            animi aut repellat!
          </p>
        </RadientHover>
      </Card>
    </ComponentExample>
  );
};

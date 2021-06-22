import { Card } from "../cards/Card";
import { Panel } from "../dataDisplay/Collapsible";
import { ComponentExample } from "./ComponentExample";

export const CollapsibleExample = () => {
  return (
    <ComponentExample title={"Collapsible example"}>
      <Card width={"75%"} title={"Forced Expanded"}>
        <Panel expanded={true} header={"Dette er en header"}>
          <p>Dette er contenten</p>
        </Panel>
      </Card>

      <Card width={"75%"} title={"Normal collapsible"}>
        <Panel header={"Dette er en header"}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem facilis fugit aliquam nesciunt necessitatibus rem sint quibusdam, mollitia esse cum commodi id excepturi fugiat
            tenetur veniam, perferendis reprehenderit veritatis asperiores nostrum nobis, at quasi labore praesentium. Doloremque officia ipsa dolore repellat nobis quaerat amet ducimus natus quam,
            temporibus veritatis nesciunt fugit dolor vel distinctio sapiente nemo eligendi unde fugiat impedit! Vel a similique ipsa suscipit. Mollitia, et! Repudiandae libero soluta voluptas quod
            provident aliquid odio optio qui sed, architecto blanditiis a quidem autem laboriosam facilis doloremque pariatur ut exercitationem aspernatur placeat debitis assumenda, temporibus
            incidunt! Rem molestiae saepe nesciunt.
          </p>
        </Panel>
      </Card>

      <Card width={"75%"}>
        <Panel header={"Dette er en header"}>
          <p>Dette er contenten</p>
        </Panel>
      </Card>

      <Card width={"75%"}>
        <Panel header={"Dette er en header"}>
          <p>Dette er contenten</p>
        </Panel>
      </Card>
    </ComponentExample>
  );
};

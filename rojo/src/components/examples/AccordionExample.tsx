import styled from "styled-components";
import { Panel } from "../dataDisplay/Collapsible";
import { Content } from "../layout/Content";
import { ComponentExample } from "./ComponentExample";
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3c3c3c;
`;

const Rounded = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.2em;
  overflow-x: hidden;
`;
export const AccordionExample = () => {
  return (
    <Content>
      <StyledDiv>
        <ComponentExample title={"Example"}>
          <Rounded>
            <Panel expanded={true} header={"Dette er en header"}>
                <p>Dette er contenten</p>
            </Panel>
            <Panel header={"Dette er en header"}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Animi quidem facilis fugit aliquam nesciunt necessitatibus rem sint quibusdam, 
                  mollitia esse cum commodi id excepturi fugiat tenetur veniam, perferendis reprehenderit 
                  veritatis asperiores nostrum nobis, at quasi labore praesentium. Doloremque officia ipsa
                   dolore repellat nobis quaerat amet ducimus natus quam, temporibus veritatis nesciunt fugit 
                   dolor vel distinctio sapiente nemo eligendi unde fugiat impedit! Vel a similique ipsa suscipit. 
                   Mollitia, et! Repudiandae libero soluta voluptas quod provident aliquid odio optio qui sed, 
                   architecto blanditiis a quidem autem laboriosam facilis doloremque pariatur ut exercitationem 
                   aspernatur placeat debitis assumenda, temporibus incidunt! Rem molestiae saepe nesciunt.</p>
            </Panel>
            <Panel header={"Dette er en header"}>
                <p>Dette er contenten</p>
            </Panel>
            <Panel header={"Dette er en header"}>
                <p>Dette er contenten</p>
            </Panel>
          </Rounded>
        </ComponentExample>
      </StyledDiv>
    </Content>
  );
};

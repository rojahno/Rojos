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

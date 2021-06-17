import { useState } from "react";
import styled from "styled-components";
import { Notifications } from "../dataDisplay/Modal";
import { StyledButton } from "../general/Buttons";
import { Content } from "../layout/Content";
import { ComponentExample } from "./ComponentExample";
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3c3c3c;
`;

export const ModalExample = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Content>
      <StyledDiv>
        <ComponentExample title={"Example"}>
          <Notifications onCancel={toggle} onOk={toggle} visible={open}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus dolores nesciunt, dolore cupiditate doloremque unde rem molestiae eius quisquam nulla ducimus consequuntur ad totam
            adipisci, quis minus esse necessitatibus accusantium delectus ullam iste ipsum aperiam. Veniam, enim. Quam sunt laudantium aspernatur aliquid, ipsa facere optio necessitatibus alias,
            dolores ex voluptate?
          </Notifications>
          <StyledButton color={"#fff"} onClick={toggle}>
            Show modal
          </StyledButton>
        </ComponentExample>
      </StyledDiv>
    </Content>
  );
};

import { useState } from "react";
import { Modal } from "../dataDisplay/Modal";
import { PageLayout } from "../displayPage/PageLayout";
import { StyledButton } from "../general/Buttons";
import { ComponentExample } from "./ComponentExample";

export const ModalExample = () => {
  const title = "Modal";
  const summary = "The modal component ...";
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Example"} verticalCenter={true}>
        <Modal onCancel={toggle} onOk={toggle} visible={open} width={"530px"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus dolores nesciunt, dolore cupiditate doloremque unde rem molestiae eius quisquam nulla ducimus consequuntur ad totam
          adipisci, quis minus esse necessitatibus accusantium delectus ullam iste ipsum aperiam. Veniam, enim. Quam sunt laudantium aspernatur aliquid, ipsa facere optio necessitatibus alias, dolores
          ex voluptate?
        </Modal>
        <StyledButton color={"#ffffff"} backgroundColor={"#3c3c3c80"} onClick={toggle}>
          Show modal
        </StyledButton>
      </ComponentExample>
    </PageLayout>
  );
};

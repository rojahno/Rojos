import styled from "styled-components";
import { CollapsibleShowCase } from "../showcase/CollapsibleShowCase";
import { LayoutShowCase } from "../showcase/LayoutShowCase";
import { LoaderShowCase } from "../showcase/LoaderShowCase";
import { ModalShowCase } from "../showcase/ModalShowCase";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ComponentOverview = () => {
  return (
    <div>
      <Header>
        <h1>Components</h1>
      </Header>
      <LayoutShowCase />
      <LoaderShowCase />
      <CollapsibleShowCase />
      <ModalShowCase />
    </div>
  );
};

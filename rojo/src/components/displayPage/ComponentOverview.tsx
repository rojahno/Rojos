import styled from "styled-components";
import { DataDisplayShowCase } from "../showcase/CollapsibleShowCase";
import { EffectsShowCase } from "../showcase/EffectsShowCase";
import { LayoutShowCase } from "../showcase/LayoutShowCase";
import { LoaderShowCase } from "../showcase/LoaderShowCase";

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
      <DataDisplayShowCase />
      <EffectsShowCase/>
    </div>
  );
};

import styled from "styled-components";
import { Card } from "../cards/Card";
import { ShowCase } from "../layout/ShowCase";
import SVGLayout from "../../images/layout.svg";
import SVGGrid from "../../images/grid.svg";
import SVGOverflow from "./../../images/overflow-text.svg";

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const LayoutShowCase = () => {
  return (
    <ShowCase>
      <Card title={"Layout"}>
        <Image src={SVGLayout} />
      </Card>
      <Card title={"Grid"}>
        <Image src={SVGGrid} />
      </Card>
      <Card title={"Overflow"}>
        <Image src={SVGOverflow} />
      </Card>
    </ShowCase>
  );
};

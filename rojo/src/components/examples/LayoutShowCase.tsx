import styled from "styled-components";
import { Card } from "../cards/Card";
import { ShowCase } from "../layout/ShowCase";
import SVGLayout from "../../images/layout.svg";
import SVGGrid from "../../images/grid.svg";
import SVGOverflow from "./../../images/overflow-text.svg";
import SVGDivider from "./../../images/divider.svg";
import { Divider } from "./../layout/Divider";
import { Link } from "react-router-dom";

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const LayoutShowCase = () => {
  return (
    <div>
      <Divider />
      <ShowCase title={"Layouts"}>
        <Link to={"/layout"}>
          <Card title={"Layout"}>
            <Image src={SVGLayout} />
          </Card>
        </Link>

        <Link to={"/grid"}>
          <Card title={"Grid"}>
            <Image src={SVGGrid} />
          </Card>
        </Link>

        <Link to={"/overflow"}>
          <Card title={"Overflow"}>
            <Image src={SVGOverflow} />
          </Card>
        </Link>

        <Link to={"/divider"}>
          <Card title={"Divider"}>
            <Image src={SVGDivider} />
          </Card>
        </Link>
      </ShowCase>
      <Divider />
    </div>
  );
};

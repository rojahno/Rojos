import styled from "styled-components";
import { Card } from "../cards/Card";
import { ShowCase } from "../layout/ShowCase";
import SVGLayout from "../../images/layout.svg";
import { Link } from "react-router-dom";

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const DataDisplayShowCase = () => {
  return (
    <div>
      <ShowCase title={"Data Display"}>
        <Link to={"/accordion"}>
          <Card hoverable={true} title={"Collapsible"}>
            <Image src={SVGLayout} />
          </Card>
        </Link>
        <Link to={"/card"}>
          <Card hoverable={true} title={"Card"}>
            <Image src={SVGLayout} />
          </Card>
        </Link>
        <Link to={"/notification"}>
          <Card hoverable={true} title={"Notification"}>
            <Image src={SVGLayout} />
          </Card>
        </Link>
      </ShowCase>
    </div>
  );
};

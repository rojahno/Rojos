import styled from "styled-components";
import { Card } from "../../components/cards/Card";
import { ShowCase } from "../../components/layout/ShowCase";
import SVGLayout from "../../images/layout.svg";
import { Link } from "react-router-dom";

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const MiscShowCase = () => {
  return (
    <div>
      <ShowCase title={"Misc"}>
        <Link to={"/misc/snake"}>
          <Card hoverable={true} title={"Snake"}>
            <Image src={SVGLayout} />
          </Card>
        </Link>
        <Link to={"/misc/dvd"}>
          <Card hoverable={true} title={"DVD"}>
            <Image src={SVGLayout} />
          </Card>
        </Link>
      </ShowCase>
    </div>
  );
};

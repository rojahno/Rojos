import styled from "styled-components";
import { Card } from "../cards/Card";
import { ShowCase } from "../layout/ShowCase";
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
      </ShowCase>
    </div>
  );
};

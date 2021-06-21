import styled from "styled-components";
import { Card } from "../cards/Card";
import { ShowCase } from "../layout/ShowCase";
import SVGLoadingBar from "../../images/loading-bar.svg";
import SVGLoadingCircle from "../../images/loading-circle.svg";
import SVGHourGlass from "./../../images/hourglass.svg";
import { Link } from "react-router-dom";

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const LoaderShowCase = () => {
  return (
    <div>
      <ShowCase title={"Loaders"}>
        <Link to={"/loaders/circle"}>
          <Card hoverable={true} title={"Circle"}>
            <Image src={SVGLoadingCircle} />
          </Card>
        </Link>

        <Link to={"/loaders/icon"}>
          <Card hoverable={true} title={"Icon"}>
            <Image src={SVGHourGlass} />
          </Card>
        </Link>
        <Link to={"/loaders/bar"}>
          <Card hoverable={true} title={"Bar"}>
            <Image src={SVGLoadingBar} />
          </Card>
        </Link>
      </ShowCase>
    </div>
  );
};

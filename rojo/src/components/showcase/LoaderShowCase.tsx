import styled from "styled-components";
import { Card } from "../cards/Card";
import { ShowCase } from "../layout/ShowCase";
import SVGLoadingBar from "../../images/loading-bar.svg";
import SVGLoadingCircle from "../../images/loading-circle.svg";
import SVGHourGlass from "./../../images/hourglass.svg";
import { Divider } from "../layout/Divider";
import React from "react";
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
          <Card title={"Circle"}>
            <Image src={SVGLoadingCircle} />
          </Card>
        </Link>

        <Link to={"/loaders/icon"}>
          <Card title={"Icon"}>
            <Image src={SVGHourGlass} />
          </Card>
        </Link>

        <Card title={"Loading bar"}>
          <Image src={SVGLoadingBar} />
        </Card>
      </ShowCase>
      <Divider />
    </div>
  );
};

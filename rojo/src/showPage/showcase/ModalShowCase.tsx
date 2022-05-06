import styled from "styled-components";
import { Card } from "../../components/cards/Card";
import { ShowCase } from "../../components/layout/ShowCase";
import SVGLayout from "../../images/layout.svg";
import { Link } from "react-router-dom";

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const ModalShowCase = () => {
  return (
    <div>
      <ShowCase title={"Notification"}>
        <Link to={"/notification"}>
          <Card hoverable={true} title={"Notification"}>
            <Image src={SVGLayout} />
          </Card>
        </Link>
      </ShowCase>
    </div>
  );
};

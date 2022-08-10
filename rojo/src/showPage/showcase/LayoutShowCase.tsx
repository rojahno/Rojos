import styled from "styled-components";
import { Card } from "../../components/cards/Card";
import { ShowCase } from "../../components/layout/ShowCase";
import SVGLayout from "../../images/layout.svg";
import SVGGrid from "../../images/grid.svg";
import SVGOverflow from "./../../images/overflow-text.svg";
import SVGDivider from "./../../images/divider.svg";
import { Link } from "react-router-dom";

const Image = styled.img`
    height: auto;
    width: 100%;
`;

export const LayoutShowCase = () => {
    return (
        <div>
            <ShowCase title={"Layouts"}>
                <Link to={"/layout"}>
                    <Card hoverable={true} title={"Layout"}>
                        <Image src={SVGLayout} />
                    </Card>
                </Link>

                <Link to={"/grid"}>
                    <Card hoverable={true} title={"Grid"}>
                        <Image src={SVGGrid} />
                    </Card>
                </Link>

                <Link to={"/overflow"}>
                    <Card hoverable={true} title={"Overflow"}>
                        <Image src={SVGOverflow} />
                    </Card>
                </Link>

                <Link to={"/divider"}>
                    <Card hoverable={true} title={"Divider"}>
                        <Image src={SVGDivider} />
                    </Card>
                </Link>
            </ShowCase>
        </div>
    );
};

import React, { useState } from "react";
import styled from "styled-components";

interface HoverProps {
    children?: any;
    hovering?: boolean;
    background?: string;
    gradient?: string;
    x: number;
    y: number;
}

const HoverContainer = styled.div<HoverProps>`
    height: 100%;
    background: ${(props) =>
        // eslint-disable-next-line
        props.hovering
            ? "-webkit-radial-gradient(" +
              props.x +
              "px " +
              props.y +
              "px" +
              ",circle," +
              props.gradient +
              ", " +
              props.background +
              " 7em)"
            : props.background};
`;

interface RadientHoverProps {
    children?: React.ReactNode;
    backgroundColor?: string;
    gradientColor?: string;
}

export const RadientHover = (props: RadientHoverProps) => {
    const [inElemnt, setInElement] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    // Create our reference
    const HoverElement = React.useRef<HTMLDivElement>(null);

    let mouseEnter = () => {
        setInElement(true);
    };

    let mouseLeave = () => {
        setInElement(false);
    };

    // Used to set the correct position if the users mouse starts in the hoverBox
    let mouseOver = (e: any) => {
        if (!inElemnt) {
            setInElement(true);
            let rect = HoverElement.current?.getBoundingClientRect();
            if (rect !== undefined) {
                let x = e.clientX - rect.left; //x position within the element.
                let y = e.clientY - rect.top; //y position within the element.
                setX(x);
                setY(y);
            }
        }
    };

    let mouseMove = (e: any) => {
        if (HoverElement != null) {
            let rect = HoverElement.current?.getBoundingClientRect();
            if (rect !== undefined) {
                let x = e.clientX - rect.left; //x position within the element.
                let y = e.clientY - rect.top; //y position within the element.
                setX(x);
                setY(y);
            }
        }
    };

    return (
        <HoverContainer
            ref={HoverElement}
            gradient={props.gradientColor}
            background={props.backgroundColor}
            x={x}
            y={y}
            hovering={inElemnt}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onMouseMove={mouseMove}
            onMouseOver={mouseOver}>
            <div>{props.children}</div>
        </HoverContainer>
    );
};

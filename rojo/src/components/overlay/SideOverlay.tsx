import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./../general/Buttons";

interface SideNavProps {
    width?: string;
    position?: string;
    moveRight?: boolean;
    buttonText?: string;
}

const SideNav = styled.div<SideNavProps>`
    height: 100%;
    width: ${(props) => (props.width ? props.width : "25hv")};
    position: fixed;
    z-index: 1;
    left: ${(props) => (props.moveRight ? "" : "0")};
    right: ${(props) => (props.moveRight ? "0" : "")};
    top: 0;

    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;

    display: flex;
    flex-direction: column;
`;

interface CloseButtonProps {
    right?: boolean;
}

const CloseButton = styled.a<CloseButtonProps>`
    display: flex;
    justify-content: ${(props) => (props.right ? "flex-start" : "flex-end")};
    font-size: 3vh;
    width: 90%;
    color: #818181;
    padding: 0.5em;
    transition: 0.3s;

    &:hover {
        color: #f1f1f1;
    }
`;

const SideLinks = styled.a`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
        color: #f1f1f1;
    }
`;

export const SideOverlay = (props: SideNavProps) => {
    const [width, setWidth] = useState("0px");

    const showOverlay = () => {
        setWidth("250px");
    };

    const hideOverlay = () => {
        setWidth("0px");
    };
    return (
        <div>
            <StyledButton onClick={showOverlay}>{props.buttonText}</StyledButton>
            <SideNav width={width} moveRight={props.moveRight}>
                <CloseButton right={props.moveRight} onClick={hideOverlay}>
                    x
                </CloseButton>
                <SideLinks>Home</SideLinks>
                <SideLinks>Contact</SideLinks>
                <SideLinks>Mail</SideLinks>
                <SideLinks>Info</SideLinks>
                <SideLinks>About</SideLinks>
            </SideNav>
        </div>
    );
};

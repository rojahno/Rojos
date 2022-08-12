import styled from "styled-components";

interface ContentProps {
    centerX?: boolean;
    centerY?: boolean;
    backgroundColor?: string;
}

export const Content = styled.div<ContentProps>`
    grid-column-start: content;
    max-width: 960px;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    border-left: solid #3c3c3c;
    border-right: solid #3c3c3c;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.centerX ? "center" : "center")};
    justify-content: ${(props) => (props.centerY ? "center" : "flex-start")};
`;

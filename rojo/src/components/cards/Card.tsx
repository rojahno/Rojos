import styled from "styled-components";

interface CardProps {
    children?: any;
    title?: string;
    content?: any;
    hoverable?: boolean;
    width?: string;
    height?: string;
    backgroundColor?: string;
}

const CardContainer = styled.div<CardProps>`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#ffffffee")};
    color: black;
    margin: 0.5em;
    box-shadow: 0;
    transition: 0.3s;
    border: 1px solid #000000;
    border-radius: 0.5rem;
    width: ${(props) => (props.width ? props.width : "")};
    height: ${(props) => (props.height ? props.height : "")};

    //overflow: auto;
    &:hover {
        box-shadow: ${(props) => (props.hoverable ? "0px 8px 16px 0px rgba(0, 0, 0, 0.3)" : "")};
    }
`;

const CardTitle = styled.h4`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #000000aa;
    border-radius: 0.1rem;
    margin: 0;
    padding: 0.5em;
`;

const CardContent = styled.div`
    display: flex;
    //flex-direction: column;
    justify-content: center;
    align-items: stretch;
    color: black;
    padding: 1em;
`;

export const Card = (props: CardProps) => {
    return (
        <CardContainer width={props.width} height={props.height} hoverable={props.hoverable}>
            <CardTitle>{props.title}</CardTitle>
            <CardContent>{props.children}</CardContent>
        </CardContainer>
    );
};

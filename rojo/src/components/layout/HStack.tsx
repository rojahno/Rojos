import styled from "styled-components";
interface HStackProps {
    centered?: boolean;
    height?: string;
    width?: string;
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    color?: string;
    gap?: string;
}
export const HStack = styled.div<HStackProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => (props.centered ? "center" : "")};
    align-items: ${(props) => (props.centered ? "center" : "")};
    gap: ${(props) => (props.gap ? props.gap : "2em")};
    width: ${(props) => (props.height ? props.width : "100%")};
    padding: ${(props) => (props.padding ? props.padding : "0em")};
    margin: ${(props) => (props.padding ? props.padding : "0em")};
    color: ${(props) => (props.color ? props.color : "")};
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};
`;

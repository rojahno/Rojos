import styled from "styled-components";
interface VStackProps {
    centered?: boolean;
    height?: string;
    padding?: string;
    width?: string;
    margin?: string;
    backgroundColor?: string;
    color?: string;
    gap?: string;
}
export const VStack = styled.div<VStackProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.centered ? "center" : "")};
    align-items: ${(props) => (props.centered ? "center" : "")};
    height: ${(props) => (props.height ? props.height : "100%")};
    height: ${(props) => (props.width ? props.width : "100%")};
    padding: ${(props) => (props.padding ? props.padding : "0em")};
    margin: ${(props) => (props.padding ? props.padding : "0em")};
    color: ${(props) => (props.color ? props.color : "")};
    gap: ${(props) => (props.gap ? props.gap : "2em")};
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};
`;

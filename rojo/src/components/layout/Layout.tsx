import styled from "styled-components";

interface LayoutProps {
    height?: string;
    width?: string;
    backgroundColor?: string;
}
/**
 * @todo Add support for sidebars.
 */
export const Layout = styled.section<LayoutProps>`
    //min-height: 100vh; //Is it this components responsibility to set the view height?
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "100%")};
    display: grid;
    grid-gap: 0em; //Remove the gap or make it an prop?
    grid-template-rows: [header] auto [main-content] 1fr [footer] auto;
`;

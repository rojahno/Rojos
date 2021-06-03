import styled from "styled-components";

interface LayoutProps {
  children?: any;
}
/**
 * @todo Add support for sidebars.
 */
const GridWrapper = styled.section<LayoutProps>`
  min-height: 100vh; //Is it this components responsibility to set the view height?
  display: grid;
  grid-gap: 1em; //Remove the gap or make it an prop?
  grid-template-columns: minmax(0, 1fr) ;
  grid-template-rows: [header] auto [main-content] 1fr [footer] auto;
`;

export function Layout(props: LayoutProps) {
  return <GridWrapper>{props.children}</GridWrapper>;
}

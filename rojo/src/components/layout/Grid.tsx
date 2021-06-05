import styled from "styled-components";

interface GridProps {
  columns?: number;
  maxWidth?: string; // Change name.
  minColumnWidth?: string; //Change name.
  centerX?: boolean;
  centerY?: boolean;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => (props.columns ? props.columns : "auto-fit")}, minmax(${(props) => (props.minColumnWidth ? props.minColumnWidth : "2em")}, 1fr));
  width: 100%;
  grid-auto-flow: row dense;
  align-items: ${(props) => (props.centerY ? "center" : "baseline")};
  justify-content: ${(props) => (props.centerX ? "center" : "baseline")};
  grid-gap: 1em; //ADD PROPS
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  padding: 0em;
  margin: 0em;

`;

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
  grid-template-columns: repeat(${(props) => (props.columns ? props.columns : "auto-fit")}, minmax(${(props) => (props.minColumnWidth ? props.minColumnWidth : "10em")}, 1fr));
  width: 100%;
  align-items: ${(props) => (props.centerY ? "center" : "")};
  justify-content: ${(props) => (props.centerX ? "center" : "")};
  grid-gap: 3rem;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
`;

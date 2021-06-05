import styled from "styled-components";
import { Grid } from "./Grid";

interface ShowCaseProps {
  title?: string;
  children?: any;
}
const ShowCaseContainer = styled.div`
  width: 40vw;

  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin: 0px;
  padding: 0em 2em 2em 2em;
  margin: 0.5em;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const ShowCase = (props: ShowCaseProps) => {
  return (
    <ShowCaseContainer>
      <h1>Layout</h1>
      <Grid>{props.children}</Grid>
    </ShowCaseContainer>
  );
};

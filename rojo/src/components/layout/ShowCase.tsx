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
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
  padding: 0em 2em 2em 2em;
  margin: 0.5em;
`;

const ShowCaseTitle = styled.h1`
  align-self: flex-start;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

export const ShowCase = (props: ShowCaseProps) => {
  return (
    <ShowCaseContainer>
      <ShowCaseTitle> {props.title}</ShowCaseTitle>
      <Grid>{props.children}</Grid>
    </ShowCaseContainer>
  );
};

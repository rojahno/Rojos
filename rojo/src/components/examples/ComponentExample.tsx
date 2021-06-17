import styled from "styled-components";
import { Card } from "../cards/Card";
import { Grid } from "../layout/Grid";

interface ComponentExampleProps {
  children?:any;
  title?: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top:2em;
 `; 
export const ComponentExample = (props: ComponentExampleProps) => {
  return (
    <Container>
    <Card title={props.title}>
      <Grid centerX={true} columns={2}>
          {props.children}
      </Grid>
    </Card>
    </Container>
  );
};

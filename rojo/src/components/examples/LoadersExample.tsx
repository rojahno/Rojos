import { Box } from "../layout/Box";
import { Grid } from "../layout/Grid";
import CircularLoader from "../Loaders/circles/CircularLoader";
import { Hourglass } from "../Loaders/Hourglass";
import { ExampleContainer } from "./ExampleContainer";

export const LoadersExample = () => {
  return (
    <ExampleContainer>
      <h1>Loaders</h1>
      <Grid columns={1} centerX={true} centerY={true}>
        <Box>
          <CircularLoader />
        </Box>
        <Box>
          <Hourglass />
        </Box>
      </Grid>
    </ExampleContainer>
  );
};

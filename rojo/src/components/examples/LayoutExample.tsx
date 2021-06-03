import { Header } from "../layout/Header";
import { MainContent } from "../layout/MainContent";
import { Footer } from "../layout/Footer";
import { Layout } from "../layout/Layouts";
import { Grid } from "../layout/Grid";
import { Hourglass } from "../Loaders/Hourglass";
import { Box } from "../layout/Box";
import CircularLoader from "../Loaders/CircularLoader";

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

export function LayoutExample() {
  return (
    <Layout>
      <Header centered={true} color={"#4890b9"}>
        Header
      </Header>
      <MainContent horizontalCenter={true} verticalCenter={false} color={"#4b8ba7"}>
        <Grid centerY={true} centerX={true} maxWidth={"500px"}>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
          <Box>5</Box>
          <Box>6</Box>
          <Box>7</Box>
          <Box>8</Box>
          <Box>9</Box>
          <Box>10</Box>
          <Box>
            <Hourglass />
          </Box>
          <Box>
            <CircularLoader />
          </Box>
        </Grid>
      </MainContent>
      <Footer centered={true} color={"#588599"}>
        Footer
      </Footer>
    </Layout>
  );
}

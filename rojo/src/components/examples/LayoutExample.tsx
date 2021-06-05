import { Header } from "../layout/Header";
import { MainContent } from "../layout/MainContent";
import { Footer } from "../layout/Footer";
import { Layout } from "../layout/Layout";
import { Grid } from "../layout/Grid";
import { Box } from "../layout/Box";
import { ExampleContainer } from "./ExampleContainer";

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

export function LayoutExample() {
  return (
    <ExampleContainer>
      <h1>Layout</h1>
      <Layout height={"100%"}>
        <Header centered={true} color={"#51C4C4"}>
          Header
        </Header>
        <MainContent centerX={true} centerY={true} color={"#51c4c4ac"}>
          Content
        </MainContent>
        <Footer centered={true} color={"#51C4C4"}>
          Footer
        </Footer>
      </Layout>
    </ExampleContainer>
  );
}

export const GridExample = () => {
  return (
    <ExampleContainer>
      <h1>Grid</h1>
      <Grid centerY={true} centerX={true} maxWidth={"500px"} columns={2}>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
      </Grid>
    </ExampleContainer>
  );
};

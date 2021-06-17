import { Header } from "../layout/Header";
import { MainContent } from "../layout/MainContent";
import { Footer } from "../layout/Footer";
import { Layout } from "../layout/Layout";
import { Grid } from "../layout/Grid";
import { Box } from "../layout/Box";
import { ExampleContainer } from "./ExampleContainer";
import { BulletPointList } from "../general/Lists";
import { ComponentExample } from "./ComponentExample";
import { Content } from "../layout/Content";
import { SimpleContainer } from "../layout/SimpleContainer";

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

export function LayoutExample() {
  const list = ["This is good because...", "Layout is the parent component", "Header, Content and Footer are children components"];

  return (
    <Content>
      <ComponentExample title={"Example"}>
        <BulletPointList listItems={list} />
        <SimpleContainer>
          <Layout>
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
        </SimpleContainer>
      </ComponentExample>
    </Content>
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

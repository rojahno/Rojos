import { Header } from "../layout/Header";
import { MainContent } from "../layout/MainContent";
import { Footer } from "../layout/Footer";
import { Layout } from "../layout/Layout";
import { Grid } from "../layout/Grid";
import { Box } from "../layout/Box";
import { ExampleContainer } from "./ExampleContainer";
import { Content } from "../layout/Content";
import { ShowCase } from "../layout/ShowCase";
import { Card } from "../cards/Card";
import { BulletPointList } from "../general/Lists";
import { Container } from "../layout/Container";

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

export function LayoutExample() {
  const list = [
    "This is good because...",
    "Layout is the parent component",
    "Header, Content and Footer are children components",
  ];

  return (
    <Container>
      <BulletPointList listItems={list} />
      <Card title={"Example"}>
        <Layout height={"20vh"} width={"20vh"}>
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
      </Card>
    </Container>
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

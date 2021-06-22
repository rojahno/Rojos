import { Header } from "../layout/Header";
import { MainContent } from "../layout/MainContent";
import { Footer } from "../layout/Footer";
import { Layout } from "../layout/Layout";
import { Grid } from "../layout/Grid";
import { Box } from "../layout/Box";
import { BulletPointList } from "../general/Lists";
import { ComponentExample } from "./ComponentExample";
import { OverflowContainer } from "../layout/OverflowContainer";
import styled from "styled-components";
import { Divider } from "../layout/Divider";

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

export function LayoutExample() {
  const list = ["This is good because...", "Layout is the parent component", "Header, Content and Footer are children components"];

  return (
    <ComponentExample title={"Example"}>
      <BulletPointList listItems={list} />
      <Layout>
        <Header centered={true} backgroundColor={"#51C4C4"}>
          Header
        </Header>
        <MainContent centerX={true} centerY={true} backgroundColor={"#51c4c4ac"}>
          Content
        </MainContent>
        <Footer centered={true} color={"#51C4C4"}>
          Footer
        </Footer>
      </Layout>
    </ComponentExample>
  );
}

export const GridExample = () => {
  return (
    <ComponentExample title={"Grid Example"}>
      <Grid centerY={true} centerX={true} columns={2}>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
        <Box>Grid Box</Box>
      </Grid>
    </ComponentExample>
  );
};
const Overflow = styled.div`
  height: 50px;
  width: 50%;
  display: flex;
  justify-content: center;
`;
export const OverflowExample = () => {
  return (
    <ComponentExample title={"Overflow Example"}>
      <OverflowContainer>
        <Overflow>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <br />
          Eius praesentium incidunt in veritatis nam odio? Recusandae repellat, commodi, ratione eum cumque odio pariatur libero rem obcaecati nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor sit
          amet
          <br />
          <br /> consectetur, adipisicing elit. Velit repudiandae commodi quod soluta accusantium ex incidunt, magni sint fugit reiciendis nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor
          <br /> sit amet consectetur, adipisicing elit. Velit repudiandae commodi quod soluta accusantium ex incidunt, magni sint fugit reiciendis assumenda voluptatem, esse dignissimos similique?
          Qui quod cumque molestias ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <br />
          Eius praesentium incidunt in veritatis nam odio? Recusandae repellat, commodi, ratione eum cumque odio pariatur libero rem obcaecati nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor sit
          amet
          <br />
          <br /> consectetur, adipisicing elit. Velit repudiandae commodi quod soluta accusantium ex incidunt, magni sint fugit reiciendis nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor
          <br /> sit amet consectetur, adipisicing elit. Velit repudiandae commodi quod soluta accusantium ex incidunt, magni sint fugit reiciendis assumenda voluptatem, esse dignissimos similique?
          Qui quod cumque molestias ea.
          <br />
        </Overflow>
      </OverflowContainer>
    </ComponentExample>
  );
};

export const DividerExample = () => {
  return (
    <ComponentExample title={"Divider Example"}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat nostrum, quam, doloremque quis nisi eligendi possimus facere autem consequatur dignissimos magnam repellendus. Laborum
      possimus officia vero sunt maiores? Dignissimos?
      <Divider />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quis est sit perspiciatis excepturi? Dolorum repellat fuga perspiciatis deleniti, facilis dolore rerum recusandae ad debitis.
      Sunt mollitia doloribus consectetur vero.
      <Divider />
    </ComponentExample>
  );
};

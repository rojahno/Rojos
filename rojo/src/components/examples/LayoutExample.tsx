import { Header } from "../layout/Header";
import { MainContent } from "../layout/MainContent";
import { Footer } from "../layout/Footer";
import { Layout } from "../layout/Layout";
import { Grid } from "../layout/Grid";
import { Box } from "../layout/Box";
import { ComponentExample } from "./ComponentExample";
import { OverflowContainer } from "../layout/OverflowContainer";
import styled from "styled-components";
import { Divider } from "../layout/Divider";
import { PageLayout } from "../displayPage/PageLayout";
import { SideBar } from "../sideBar/SideBar";
import { Content } from "../layout/Content";
import React from "react";
import { MacScrollContainer } from "../scrollbar/Scrollbars";
import { Card } from "../cards/Card";

const VerticalText = styled.p`
  writing-mode: vertical-lr;
  text-orientation: upright;
  cursor: default;
`;

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

export function LayoutExample() {
  return (
    <PageLayout
      componentName={"Layout example"}
      componentSummary={
        "The Layout components makes for an easy and responsible way to design your website."
      }
      componentDescription={
        'The layout components consist of four different components:  "Layout", "Header", "MainContent" and "Footer". These components creates a responsive and easy-to-use layout for your webpage. '
      }
    >
      <ComponentExample title={"Normal layout example"}>
        <Layout width={"100%"} height={"100%"}>
          <Header centered={true} backgroundColor={"#51C4C4"}>
            Header
          </Header>
          <MainContent
            centerX={true}
            centerY={true}
            backgroundColor={"#51c4c4ac"}
          >
            Content
          </MainContent>
          <Footer centered={true} color={"#51C4C4"}>
            Footer
          </Footer>
        </Layout>
      </ComponentExample>

      <ComponentExample title={"Sidebar layout example"}>
        <Layout width={"100%"} height={"100%"}>
          <Header centered={true} backgroundColor={"#51C4C4"}>
            Header
          </Header>
          <MainContent
            centerX={true}
            centerY={true}
            backgroundColor={"#51c4c4ac"}
          >
            <SideBar centerY={true} centerX={true}>
              <VerticalText>Sidebar</VerticalText>
            </SideBar>
            <Content centerX={true} centerY={true}>
              Content
            </Content>
          </MainContent>
          <Footer centered={true} color={"#51C4C4"}>
            Footer
          </Footer>
        </Layout>
      </ComponentExample>
    </PageLayout>
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
  height: 7em;
  //width: 50%;
  display: flex;
  justify-content: center;
`;
export const OverflowExample = () => {
  return (
    <ComponentExample title={"Overflow Example"}>
      <Card title={"Regular container"}>
        <OverflowContainer width={"50%"}>
          <Overflow>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <br />
            Eius praesentium incidunt in veritatis nam odio? Recusandae
            repellat, commodi, ratione eum cumque odio pariatur libero rem
            obcaecati nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor sit
            amet
            <br />
            <br /> consectetur, adipisicing elit. Velit repudiandae commodi quod
            soluta accusantium ex incidunt, magni sint fugit reiciendis nulla
            nesciunt? Corporis, dolorum! Lorem ipsum dolor
            <br /> sit amet consectetur, adipisicing elit. Velit repudiandae
            commodi quod soluta accusantium ex incidunt, magni sint fugit
            reiciendis assumenda voluptatem, esse dignissimos similique? Qui
            quod cumque molestias ea. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. <br />
            <br />
            Eius praesentium incidunt in veritatis nam odio? Recusandae
            repellat, commodi, ratione eum cumque odio pariatur libero rem
            obcaecati nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor sit
            amet
            <br />
            <br /> consectetur, adipisicing elit. Velit repudiandae commodi quod
            soluta accusantium ex incidunt, magni sint fugit reiciendis nulla
            nesciunt? Corporis, dolorum! Lorem ipsum dolor
            <br /> sit amet consectetur, adipisicing elit. Velit repudiandae
            commodi quod soluta accusantium ex incidunt, magni sint fugit
            reiciendis assumenda voluptatem, esse dignissimos similique? Qui
            quod cumque molestias ea.
            <br />
          </Overflow>
        </OverflowContainer>
      </Card>

      <Card title={"Mac scrollbar"}>
        <OverflowContainer width={"50%"}>
          <Overflow>
            <MacScrollContainer>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              praesentium obcaecati culpa nihil adipisci, excepturi sequi nulla,
              voluptatibus mollitia, veniam dignissimos ab. Quibusdam delectus
              at dolore, exercitationem ullam beatae optio et doloremque nisi
              illo accusamus dolores rem. Commodi, eius tenetur quasi ipsum
              assumenda tempore totam odit ullam officiis adipisci deleniti sed
              perferendis sit eos? Officia eum unde ratione, repellat dolor
              reprehenderit placeat est veniam adipisci libero. Ducimus error
              maxime vel, placeat maiores harum, nemo nobis neque consectetur
              temporibus sit ut sequi reiciendis impedit culpa? Mollitia beatae
              maiores repellendus numquam nam temporibus magnam, iusto in
              consequuntur quos quaerat labore perferendis corporis!
            </MacScrollContainer>
          </Overflow>
        </OverflowContainer>
      </Card>
    </ComponentExample>
  );
};

export const DividerExample = () => {
  return (
    <ComponentExample title={"Divider Example"}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat
      nostrum, quam, doloremque quis nisi eligendi possimus facere autem
      consequatur dignissimos magnam repellendus. Laborum possimus officia vero
      sunt maiores? Dignissimos?
      <Divider />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quis est
      sit perspiciatis excepturi? Dolorum repellat fuga perspiciatis deleniti,
      facilis dolore rerum recusandae ad debitis. Sunt mollitia doloribus
      consectetur vero.
      <Divider />
    </ComponentExample>
  );
};

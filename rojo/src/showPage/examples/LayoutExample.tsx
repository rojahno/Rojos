import { Header } from "../../components/layout/Header";
import { MainContent } from "../../components/layout/MainContent";
import { Footer } from "../../components/layout/Footer";
import { Layout } from "../../components/layout/Layout";
import { Grid } from "../../components/layout/Grid";
import { Box } from "../../components/layout/Box";
import { ComponentExample } from "./ComponentExample";
import { OverflowContainer } from "../../components/layout/OverflowContainer";
import styled from "styled-components";
import { Divider } from "../../components/layout/Divider";
import { PageLayout } from "../displayPage/PageLayout";
import { SideBar } from "../../components/sideBar/SideBar";
import { Content } from "../../components/layout/Content";
import { MacScrollContainer } from "../../components/scrollbar/Scrollbars";
import { SideOverlay } from "../../components/overlay/SideOverlay";

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
  const mainBackgroundColor = "#333333";
  const secondaryBackgroundColor = "#3d3d3d";
  const mainFontColor = "#ffffffdd";
  return (
    <PageLayout
      componentName={"Layout"}
      componentDescription={
        "The layout components consist of four different components: Layout, Header, MainContent and Footer. These components creates a responsive and easy-to-use layout for your webpage. "
      }
    >
      <ComponentExample title={"Normal layout example"}>
        <Layout width={"100%"} height={"100%"} backgroundColor={mainBackgroundColor}>
          <Header centered={true} backgroundColor={mainBackgroundColor} color={mainFontColor} height={"7vh"}>
            Header
          </Header>
          <MainContent centerX={true} centerY={true} backgroundColor={secondaryBackgroundColor} height={"20vh"} color={mainFontColor}>
            Content
          </MainContent>
          <Footer centered={true} backgroundColor={mainBackgroundColor} height={"7vh"} color={mainFontColor}>
            Footer
          </Footer>
        </Layout>
      </ComponentExample>

      <ComponentExample title={"Sidebar layout example"}>
        <Layout width={"100%"} height={"100%"}>
          <Header centered={true} backgroundColor={mainBackgroundColor} color={mainFontColor}>
            Header
          </Header>
          <MainContent centerX={true} centerY={true} backgroundColor={"#3d3d3d"} color={mainFontColor}>
            <SideBar centerY={true} centerX={true}>
              <VerticalText>Sidebar</VerticalText>
            </SideBar>
            <Content centerX={true} centerY={true}>
              Content
            </Content>
          </MainContent>
          <Footer centered={true} backgroundColor={mainBackgroundColor} color={mainFontColor}>
            Footer
          </Footer>
        </Layout>
      </ComponentExample>
    </PageLayout>
  );
}

export const GridExample = () => {
  const title = "Grid";
  const summary = "The grid component enables a responsive way to build a grid.";
  const mainBackgroundColor = "#3d3d3dee";
  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Grid Example"} backgroundColor={mainBackgroundColor} padding={"1em"}>
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
    </PageLayout>
  );
};
const Overflow = styled.div`
  height: 7em;
  //width: 50%;
  display: flex;
  justify-content: center;
`;
export const OverflowExample = () => {
  const title = "Overflow";
  const summary = "The overflow component enables an easy way to handle overflow on a webpage.";
  const mainBackgroundColor = "#3d3d3dee";
  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Overflow Example"} padding={"1em"} backgroundColor={mainBackgroundColor} verticalCenter={true}>
        <OverflowContainer width={"50%"}>
          <Overflow>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <br />
            Eius praesentium incidunt in veritatis nam odio? Recusandae repellat, commodi, ratione eum cumque odio pariatur libero rem obcaecati nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor
            sit amet
            <br />
            <br /> consectetur, adipisicing elit. Velit repudiandae commodi quod soluta accusantium ex incidunt, magni sint fugit reiciendis nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor
            <br /> sit amet consectetur, adipisicing elit. Velit repudiandae commodi quod soluta accusantium ex incidunt, magni sint fugit reiciendis assumenda voluptatem, esse dignissimos similique?
            Qui quod cumque molestias ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <br />
            Eius praesentium incidunt in veritatis nam odio? Recusandae repellat, commodi, ratione eum cumque odio pariatur libero rem obcaecati nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor
            sit amet
            <br />
            <br /> consectetur, adipisicing elit. Velit repudiandae commodi quod soluta accusantium ex incidunt, magni sint fugit reiciendis nulla nesciunt? Corporis, dolorum! Lorem ipsum dolor
            <br /> sit amet consectetur, adipisicing elit. Velit repudiandae commodi quod soluta accusantium ex incidunt, magni sint fugit reiciendis assumenda voluptatem, esse dignissimos similique?
            Qui quod cumque molestias ea.
            <br />
          </Overflow>
        </OverflowContainer>
      </ComponentExample>

      <ComponentExample padding={"1em"} backgroundColor={mainBackgroundColor} verticalCenter={true}>
        <OverflowContainer width={"50%"}>
          <Overflow>
            <MacScrollContainer>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt praesentium obcaecati culpa nihil adipisci, excepturi sequi nulla, voluptatibus mollitia, veniam dignissimos ab. Quibusdam
              delectus at dolore, exercitationem ullam beatae optio et doloremque nisi illo accusamus dolores rem. Commodi, eius tenetur quasi ipsum assumenda tempore totam odit ullam officiis
              adipisci deleniti sed perferendis sit eos? Officia eum unde ratione, repellat dolor reprehenderit placeat est veniam adipisci libero. Ducimus error maxime vel, placeat maiores harum,
              nemo nobis neque consectetur temporibus sit ut sequi reiciendis impedit culpa? Mollitia beatae maiores repellendus numquam nam temporibus magnam, iusto in consequuntur quos quaerat
              labore perferendis corporis!
            </MacScrollContainer>
          </Overflow>
        </OverflowContainer>
      </ComponentExample>
    </PageLayout>
  );
};

export const DividerExample = () => {
  const title = "Divider";
  const summary = "The divider component enables creates a divider to seperate two parts.";
  const mainBackgroundColor = "#3d3d3dee";
  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Divider Example"} padding={"1em"} backgroundColor={mainBackgroundColor} verticalCenter={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat nostrum, quam, doloremque quis nisi eligendi possimus facere autem consequatur dignissimos magnam repellendus.
        Laborum possimus officia vero sunt maiores? Dignissimos?
        <Divider />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti explicabo esse assumenda velit enim sed distinctio repellat natus. Tempora ratione suscipit hic doloremque quaerat unde
        sapiente error? Repudiandae obcaecati provident eligendi, aut fugit voluptates aliquid numquam ipsa, asperiores autem consequuntur unde eveniet maiores qui voluptatibus amet excepturi eius
        inventore a quidem sunt ducimus rerum. Aliquam repellendus consequuntur doloribus officiis veniam, earum deserunt iste provident asperiores doloremque sed, et animi. Consequuntur ex eveniet,
        nihil ea sint eius fugiat nostrum impedit vero doloremque cupiditate perferendis hic fuga est tenetur eum, earum maiores numquam obcaecati, et eaque voluptate nulla sit. Doloribus laudantium
        nulla deserunt atque dolorum est vero ducimus voluptatibus repellat praesentium maxime, quae magnam, ad accusamus, eaque suscipit. Inventore tempore molestiae saepe, velit libero impedit culpa
        ducimus eius, recusandae itaque ad excepturi pariatur doloremque dolores sed voluptate nesciunt consequatur est reiciendis aut aliquid temporibus atque facilis numquam! Magnam facere culpa
        velit assumenda animi, iure hic possimus nesciunt vero porro nihil quis quo ut aliquam commodi quos magni, ipsa enim in, voluptatem sit pariatur consequuntur quod! Nobis facere laboriosam,
        nostrum provident nisi facilis? Eligendi veniam exercitationem non, accusantium eveniet ut veritatis aperiam est, sunt sint dignissimos, illum unde molestias. Neque, repellendus adipisci!
        <Divider />
      </ComponentExample>
    </PageLayout>
  );
};

export const OverlayExample = () => {
  return (
    <ComponentExample title={"Overlay example"}>
      <div>
        <SideOverlay buttonText={"Left overlay"} />
        <SideOverlay moveRight={true} buttonText={"Right overlay"} />
      </div>
    </ComponentExample>
  );
};

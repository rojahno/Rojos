import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { GridExample, LayoutExample } from "../examples/LayoutExample";
import { Layout } from "../layout/Layout";
import { MainContent } from "../layout/MainContent";
import { LoadersExample } from "./../examples/LoadersExample";
import { OverlayExample } from "./../examples/OverlayExample";
import { CardExample } from "./../examples/CardExample";
import { SideBar } from "../sideBar/SideBar";
import { Content } from "../layout/Content";
import { ShowCase } from "../layout/ShowCase";
import { LayoutShowCase } from "../examples/LayoutShowCase";
import { NeonButton, NeonText } from "../neon/Neon";
export function StartPage() {
  return (
    <Layout height={"100vh"}>
      <Header color={'hsl(323 21% 16%)'} centered={true}>
        <NeonText>Rojo</NeonText>
      </Header>
      <MainContent centerX={true}>
        <Content>
          <LayoutShowCase />
          <LoadersExample />
          <OverlayExample />
          <CardExample />
        </Content>
      </MainContent>
      <Footer centered={true}>Dunde AS</Footer>
    </Layout>
  );
}

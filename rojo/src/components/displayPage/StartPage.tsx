import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { GridExample, LayoutExample } from "../examples/LayoutExample";
import { Layout } from "../layout/Layout";
import { MainContent } from "../layout/MainContent";
import { LoadersExample } from "./../examples/LoadersExample";
import { OverlayExample } from "./../examples/OverlayExample";

export function StartPage() {
  return (
    <Layout height={"100vh"}>
      <Header color={"#c45151b5"} centered={true}>
        <h1>Rojo</h1>
      </Header>
      <MainContent
        //verticalCenter={true}
        centerX={true}
      >
        <LayoutExample />
        <GridExample />
        <LoadersExample />
        <OverlayExample />
      </MainContent>
      <Footer centered={true}>Dunde AS</Footer>
    </Layout>
  );
}

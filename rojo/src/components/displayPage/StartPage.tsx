import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { LayoutExample } from "../examples/LayoutExample";
import { Layout } from "../layout/Layouts";
import { MainContent } from "../layout/MainContent";


export function StartPage() {
  return (
    <Layout height={"100vh"}>
      <Header centered={true}>
        <h1>Rojo</h1>
      </Header>
      <MainContent>
        <LayoutExample />
      </MainContent>
      <Footer centered={true}>Footer</Footer>
    </Layout>
  );
}

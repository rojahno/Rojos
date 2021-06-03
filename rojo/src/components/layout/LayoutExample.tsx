import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";
import { Layout } from "./Layouts";

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

export function LayoutExample() {
  return (
    <div>
      <Layout>
        <Header centered={true}>Header</Header>
        <MainContent horizontalCenter={true} verticalCenter={true}>Content</MainContent>
        <Footer centered={true}>Footer</Footer>
      </Layout>
    </div>
  );
}

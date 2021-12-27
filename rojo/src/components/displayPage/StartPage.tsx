import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Layout } from "../layout/Layout";
import { MainContent } from "../layout/MainContent";
import { NeonText } from "../neon/Neon";
import { Route, HashRouter as Router, Switch, Link } from "react-router-dom";
import { ComponentOverview } from "./ComponentOverview";
import { DividerExample, GridExample, LayoutExample, OverflowExample, OverlayExample } from "../examples/LayoutExample";
import { BarLoaderExample, CircleLoaderExample, IconLoaderExample } from "../examples/LoaderExample";
import { AccordionExample } from "../examples/AccordionExample";
import { ModalExample } from "../examples/ModalExample";
import { CardExample } from "../examples/CardExample";
import { MaxWidthContent } from "../layout/MaxWidthContent";
import { HoverExample } from "../examples/EffectsExample";

export function StartPage() {
  return (
    <Layout height={"100vh"}>
      <Router>
        <Header centered={true} padding={'1em'}>
          <Link to={"/"}>
            <NeonText>Rojo</NeonText>
          </Link>
        </Header>
        <MainContent centerX={true}>
          <MaxWidthContent>
            <Switch>
              <Route path="/" exact component={ComponentOverview}></Route>
              <Route path="/layout" exact component={LayoutExample}></Route>
              <Route path="/grid" exact component={GridExample}></Route>
              <Route path="/overflow" exact component={OverflowExample}></Route>
              <Route path="/divider" exact component={DividerExample}></Route>
              <Route path="/overlay" exact component={OverlayExample}></Route>
              <Route path="/hover" exact component={HoverExample}></Route>

              <Route path="/accordion" exact component={AccordionExample}></Route>
              <Route path="/modal" exact component={ModalExample}></Route>
              <Route path="/loaders/icon" exact component={IconLoaderExample}></Route>
              <Route path="/loaders/bar" exact component={BarLoaderExample}></Route>
              <Route path="/loaders/circle" exact component={CircleLoaderExample}></Route>

              <Route path="/card" exact component={CardExample}></Route>
            </Switch>
          </MaxWidthContent>
        </MainContent>
        <Footer centered={true}>Dunde AS</Footer>
      </Router>
    </Layout>
  );
}

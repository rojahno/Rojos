import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Layout } from "../layout/Layout";
import { MainContent } from "../layout/MainContent";
import { NeonText } from "../neon/Neon";
import { Route, HashRouter as Router, Switch, Link } from "react-router-dom";
import { ComponentOverview } from "./ComponentOverview";
import {
  DividerExample,
  GridExample,
  LayoutExample,
  OverflowExample,
  OverlayExample,
} from "../examples/LayoutExample";
import {
  BarLoaderExample,
  CircleLoaderExample,
  IconLoaderExample,
} from "../examples/LoaderExample";
import { CollapsibleExample } from "../examples/CollapsibleExample";
import { ModalExample } from "../examples/ModalExample";
import { CardExample } from "../examples/CardExample";
import { Content } from "../layout/Content";

export function StartPage() {
  return (
    <Layout height={"100vh"} backgroundColor={"#31202b"}>
      <Router>
        <Header backgroundColor={"#31202b"} centered={true}>
          <Link to={"/"}>
            <NeonText>Rojo</NeonText>
          </Link>
        </Header>
        <MainContent backgroundColor={"#44475a"} centerX={true}>
          <Content>
            <Switch>
              <Route path="/" exact component={ComponentOverview}></Route>
              <Route path="/layout" exact component={LayoutExample}></Route>
              <Route path="/grid" exact component={GridExample}></Route>
              <Route path="/overflow" exact component={OverflowExample}></Route>
              <Route path="/divider" exact component={DividerExample}></Route>
              <Route path="/overlay" exact component={OverlayExample}></Route>

              <Route
                path="/accordion"
                exact
                component={CollapsibleExample}
              ></Route>
              <Route
                path="/notification"
                exact
                component={ModalExample}
              ></Route>
              <Route
                path="/loaders/icon"
                exact
                component={IconLoaderExample}
              ></Route>
              <Route
                path="/loaders/bar"
                exact
                component={BarLoaderExample}
              ></Route>
              <Route
                path="/loaders/circle"
                exact
                component={CircleLoaderExample}
              ></Route>

              <Route path="/card" exact component={CardExample}></Route>
            </Switch>
          </Content>
        </MainContent>
        <Footer backgroundColor={"#31202b"} centered={true}>Dunde AS</Footer>
      </Router>
    </Layout>
  );
}

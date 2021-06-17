import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Layout } from "../layout/Layout";
import { MainContent } from "../layout/MainContent";
import { NeonText } from "../neon/Neon";
import { Route, HashRouter as Router, Switch, Link } from "react-router-dom";
import { ComponentOverview } from "./ComponentOverview";
import { GridExample, LayoutExample } from "../examples/LayoutExample";
import { CircleLoaderExample } from "../examples/CircleLoaderExample";
import { AccordionExample } from "../examples/AccordionExample";
import { ModalExample } from "../examples/ModalExample";

export function StartPage() {
  return (
    <Layout height={"100vh"}>
      <Router>
        <Header color={"#31202b"} centered={true}>
          <Link to={"/"}>
            <NeonText>Rojo</NeonText>
          </Link>
        </Header>
        <MainContent centerX={true}>
          <Switch>
            <Route path="/" exact component={ComponentOverview}></Route>
            <Route path="/layout" exact component={LayoutExample}></Route>
            <Route path="/grid" exact component={GridExample}></Route>
            <Route path="/overflow" exact component={GridExample}></Route>
            <Route path="/divider" exact component={GridExample}></Route>
            <Route path="/accordion" exact component={AccordionExample}></Route>
            <Route path="/notification" exact component={ModalExample}></Route>
            <Route path="/loaders/icon" exact component={CircleLoaderExample}></Route>
            <Route path="/loaders/bar" exact component={CircleLoaderExample}></Route>
            <Route path="/loaders/circle" exact component={CircleLoaderExample}></Route>
          </Switch>
        </MainContent>
        <Footer centered={true}>Dunde AS</Footer>
      </Router>
    </Layout>
  );
}

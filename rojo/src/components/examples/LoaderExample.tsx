import styled from "styled-components";
import { PageLayout } from "../displayPage/PageLayout";
import { Grid } from "../layout/Grid";
import { LoadingBar } from "../Loaders/bar/LoadingBar";
import { BtSpinner } from "../Loaders/circles/BtSpinner";
import CircularLoader from "../Loaders/circles/CircularLoader";
import { NbSpinner } from "../Loaders/circles/NbSpinner";
import { HourGlass } from "../Loaders/Hourglass";
import { ComponentExample } from "./ComponentExample";

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: space-evenly;
  text-align: center;
  min-width: 8em;
  min-height: 8em;
  padding: 1em;
`;

export const CircleLoaderExample = () => {
  const title = "Circular loaders";
  const summary = "The circular loader components ...";
  const mainBackgroundColor = "#3d3d3dee";
  return (
    <PageLayout componentDescription={summary} componentName={title}>
      <ComponentExample title={"Circle loaders example"} padding={"1em"} backgroundColor={mainBackgroundColor}>
        <Grid>
          <LoaderContainer>
            <CircularLoader color={"#3cefff"} />
          </LoaderContainer>

          <LoaderContainer>
            <NbSpinner color={"#3cefff"} />
          </LoaderContainer>
          <LoaderContainer>
            <BtSpinner primaryColor={"#3cefff"} secondaryColor={"#3cefff80"} />
          </LoaderContainer>
        </Grid>
      </ComponentExample>
    </PageLayout>
  );
};

export const IconLoaderExample = () => {
  const title = "Icon loaders";
  const summary = "The icon loader components ...";
  const mainBackgroundColor = "#3d3d3dee";
  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Icon loaders example"} backgroundColor={mainBackgroundColor} padding={"1em"}>
        <Grid>
          <LoaderContainer>
            <HourGlass color={"#3cefff"} />
          </LoaderContainer>
        </Grid>
      </ComponentExample>
    </PageLayout>
  );
};

export const BarLoaderExample = () => {
  const title = "Bar loaders";
  const summary = "The bar loader components ...";
  const mainBackgroundColor = "#3d3d3dee";
  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Loading bar example"} backgroundColor={mainBackgroundColor} padding={"1em"}>
        <Grid>
          <LoaderContainer>
            <LoadingBar primaryColor={"#3cefff"} secondaryColor={"#3cefff80"} />
          </LoaderContainer>
        </Grid>
      </ComponentExample>
    </PageLayout>
  );
};

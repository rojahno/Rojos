import styled from "styled-components";
import { PageLayout } from "../displayPage/PageLayout";
import { Grid } from "../../components/layout/Grid";
import { LoadingBar } from "../../components/Loaders/bar/LoadingBar";
import { BtSpinner } from "../../components/Loaders/circles/BtSpinner";
import CircularLoader from "../../components/Loaders/circles/CircularLoader";
import { NbSpinner } from "../../components/Loaders/circles/NbSpinner";
import { HourGlass } from "../../components/Loaders/Hourglass";
import { ComponentExample } from "./ComponentExample";

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 5em;
  min-height: 5em;
  width:100%;
  padding: 1em;
  margin:1em;

`;

export const CircleLoaderExample = () => {
  const title = "Circular loaders";
  const summary = "The circular loader components ...";
  const primaryBlack = '#3c3c3c'
  const secondaryBlack = '#3c3c3c40'
  const textColor = '#fff'
  return (
    <PageLayout componentDescription={summary} componentName={title}>
      <ComponentExample title={"Circle loaders example"} padding={"1em"} backgroundColor={''}>
        <Grid columns={2} centerX={true} centerY={true}>
          <LoaderContainer>
            <CircularLoader color={primaryBlack} />
          </LoaderContainer>

          <LoaderContainer>
            <NbSpinner color={primaryBlack} />
          </LoaderContainer>
          <LoaderContainer>
            <BtSpinner primaryColor={primaryBlack} secondaryColor={secondaryBlack} />
          </LoaderContainer>
        </Grid>
      </ComponentExample>
    </PageLayout>
  );
};

export const IconLoaderExample = () => {
  const title = "Icon loaders";
  const summary = "The icon loader components ...";
  const primaryBlack = '#3c3c3c'
  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Icon loaders example"} backgroundColor={''} padding={"1em"}>
        <Grid>
          <LoaderContainer>
            <HourGlass color={primaryBlack} />
          </LoaderContainer>
        </Grid>
      </ComponentExample>
    </PageLayout>
  );
};

export const BarLoaderExample = () => {
  const title = "Bar loaders";
  const summary = "The bar loader components ...";
  //const mainBackgroundColor = "#3d3d3dee";
  // const primaryBlue = '#3cefff';
  //const secondaryBlue = '#3cefff80';
  const primaryBlack = '#3c3c3c40'
  const secondaryBlack = '#3c3c3c'
  const textColor = '#fff'

  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Loading bar example"} backgroundColor={''} padding={"1em"}>
        <Grid >
          <LoaderContainer>
            <LoadingBar primaryColor={primaryBlack} secondaryColor={secondaryBlack} textColor={textColor} />
          </LoaderContainer>
        </Grid>
      </ComponentExample>
    </PageLayout>
  );
};

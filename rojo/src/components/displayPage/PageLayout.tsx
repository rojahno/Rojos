import styled from "styled-components";

const ExamplePageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

interface PageLayoutProps {
  children?: any;
  componentName?: string;
  componentSummary?: string;
  componentDescription?: string;
}

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <ExamplePageLayout>
      <h1>{props.componentName}</h1>
      <h3>{props.componentSummary}</h3>
      <p>{props.componentDescription}</p>
      {props.children}
    </ExamplePageLayout>
  );
};

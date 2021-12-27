import styled from "styled-components";

const ExamplePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1em;
  margin: 0px;
`;

interface PageLayoutProps {
  children?: any;
  componentName?: string;
  componentDescription?: string;
}

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <ExamplePageLayout>
      <h3>{props.componentName}</h3>
      <p>{props.componentDescription}</p>
      {props.children}
    </ExamplePageLayout>
  );
};

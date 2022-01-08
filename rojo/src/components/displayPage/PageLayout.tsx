import styled from "styled-components";

const ExamplePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1em 1em 2em 1em;
  margin: 0px;
  box-shadow: 0px 8px 8px 8px rgba(0, 0, 0, 0.1)
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

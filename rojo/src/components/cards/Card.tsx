import styled from "styled-components";

interface CardProps {
  children?: any;
  title?: string;
  content?: any;
  hoverable?: boolean;
}

const CardContainer = styled.div<CardProps>`
  box-shadow: 0;
  transition: 0.3s;
  border: 1px solid #3c3c3c80;
  border-radius: 0.5rem;
  width: 100%;

  &:hover {
    box-shadow: ${(props) => (props.hoverable ? "0px 8px 16px 0px rgba(0, 0, 0, 0.2)" : "")};
  }
`;

const CardTitle = styled.h4`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #3c3c3c80;
  border-radius: 0.1rem;
  margin: 0;
  padding: 0.5em;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const Card = (props: CardProps) => {
  return (
    <CardContainer hoverable={props.hoverable}>
      <CardTitle>{props.title}</CardTitle>
      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
};

import styled from "styled-components";

interface CardProps {
  children?: any;
  title?: string;
  content?: any;
  hoverable?: boolean;
}

const CardTitle = styled.h4`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #3c3c3c80;
  border-radius: 0.1rem;
  padding: 5px 0px;
  margin: 0;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh;
`;


const CardContainer = styled.div`
  box-shadow: 0;
  transition: 0.3s;
  border: 1px solid #3c3c3c80;
  border-radius: 0.5rem;
  width: 100%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Card = (props: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>{props.title}</CardTitle>
      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
};

import React from "react";
import styled from "styled-components";

interface BulletPointListProps {
  listItems?: any[];
}

const Ul = styled.ul`
  list-style-type: circle;
`;
export const BulletPointList = (props:BulletPointListProps) => {
  return <Ul>{props.listItems?.map((item, index) => <li key={index}>{item}</li>)
      }</Ul>;
};

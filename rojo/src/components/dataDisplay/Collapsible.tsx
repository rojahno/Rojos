import { useEffect, useState } from "react";
import styled from "styled-components";
import { Arrow } from "../icon/Arrow";

export const Collapsible = () => {
  return <div></div>;
};

const PanelHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: solid#D3D3D3;
  padding: 1em;
  cursor: pointer;
  user-select: none;
  text-align: center;
  overflow: hidden;
`;

const CollabsibleItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  margin-bottom: 1em;
`;

interface ContentProps {
  hide?: boolean;
}

export const Content = styled.div<ContentProps>`
  margin: 0;
  padding: 1em;
  /**
  visibility: ${(props) => (props.hide ? "hidden" : "")};
  max-height: ${(props) => (props.hide ? "0px" : "100%")};
  padding: ${(props) => (props.hide ? "0em" : "1em")};
  transition: visibility 1s ease-in;
   */
`;

interface PanelProps {
  children?: any;
  expanded?: boolean;
  onClick?: () => void;
  header?: string; //Maybe change to any?
}

export const Panel = (props: PanelProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    if (!props.expanded) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    if(props.expanded)
    setIsActive(true);

  });

  // if (props.expanded || isActive) {
  return (
    <CollabsibleItem>
      <PanelHeader onClick={handleClick}>
        {props.header}
        <Arrow rotate={!isActive} />
      </PanelHeader>
      <Content hidden={!isActive}>{props.children}</Content>
    </CollabsibleItem>
  );
};

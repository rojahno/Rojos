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
  background-color: #dadada80;
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
  background-color: #dadada80;
  margin-bottom: 1em;
  border-radius: 5px;
`;

interface ContentProps {
  hide?: boolean;
}

export const Content = styled.div<ContentProps>`
  //visibility: ${(props) => (props.hide ? "hidden" : "border-box")};
  position: relative;
  //max-height: ${(props) => (props.hide ? "0px" : "100px")};
  height: auto;
  width: 100%;
  //overflow: ${(props) => (props.hide ? "hidden" : "initial")};
  overflow: hidden;
  padding: 0.3em;
  //transition: max-height 290ms cubic-bezier(0.4, 0, 0.2, 1);
`;

interface PanelProps {
  children?: any;
  expanded?: boolean;
  onClick?: () => void;
  header?: string; //Maybe change to any?
}

/**
 * @param props
 * @returns
 */
export const Panel = (props: PanelProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    if (!props.expanded) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    const setExpaned = () => {
      if (props.expanded) {
        setIsActive(true);
      }
    };
    setExpaned();
  });

  return (
    <CollabsibleItem>
      <PanelHeader onClick={handleClick}>
        {props.header}
        <Arrow rotate={!isActive} />
      </PanelHeader>
      <Content
        hidden={!isActive}
        //hidden={!isActive}
      >
        {props.children}
      </Content>
    </CollabsibleItem>
  );
};

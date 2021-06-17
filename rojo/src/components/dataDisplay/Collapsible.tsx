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
  border-radius: 5px;
`;

interface ContentProps {
  hide?: boolean;
}

export const Content = styled.div<ContentProps>`
  display: border-box;
  position: relative;
  max-height: ${(props) => (props.hide ? "0px" : "100px")};
  height: auto;
  //overflow: ${(props) => (props.hide ? "hidden" : "initial")};
  overflow: hidden;
  transition: max-height 290ms cubic-bezier(0.4, 0, 0.2, 1);
  /* animation-name: grow-modal;
  animation-duration: 1s;
  animation-timing-function: ease;
  transition: all 0.5s ease;

  @keyframes grow-modal {
    0% {
      width: 100%;
      height: 0px;
      overflow: hidden;
    }

    50% {
      height: 184px;
    }
    100% {
      height: auto;
      overflow: initial;
    }
  }
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
        hide={!isActive}
        //hidden={!isActive}
      >
        {props.children}
      </Content>
    </CollabsibleItem>
  );
};

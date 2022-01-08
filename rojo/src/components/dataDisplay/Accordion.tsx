import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Arrow } from "../icon/Arrow";

const Panel = styled.div`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.2s ease;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #dadada50;
  border-bottom: solid#D3D3D3;
  padding: 1em;

  cursor: pointer;
  user-select: none;
  text-align: center;
  overflow: hidden;
  &:hover {
    background-color: #dadada80;
  }
`;

const AccordionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const AccordionTitle = styled.p`
  font-weight: 600;
  font-size: 17px;
  text-align: left;
`;
interface AccordionContentProps {
  maxHeight: string;
  active: boolean;
  animation?: boolean;
}
const AccordionContent = styled.div<AccordionContentProps>`
  background-color: white;
  font-weight: 400;
  overflow: auto;
  max-height: ${(props) => props.maxHeight};
  background-color: #dadada80;
  padding: ${(props) => (props.active ? "0em" : "0em")}; // Figure out how to add padding to height before setting it here
  transition: ${(props) => (props.animation ? "max-height 0.3s ease" : "")};
  padding-left: 1em;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ::-webkit-scrollbar{
    display: none; /* Chrome, Safari, Opera */
  }
`;

interface PanelProps {
  children?: any;
  expanded?: boolean;
  title?: string; //Maybe change to any?
  animation?: boolean;
}

export const Accordion = (props: PanelProps) => {
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");

  const content = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    if (!props.expanded) {
      if (isActive) {
        setContentHeight("0px");
      } else {
        if (content !== undefined) {
          setContentHeight(content.current?.scrollHeight + "px");
        }
      }
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    const setExpaned = () => {
      if (props.expanded) {
        setIsActive(true);
        setContentHeight(content.current?.scrollHeight + "px");
      }
    };
    setExpaned();
  });

  return (
    <AccordionSection>
      <Panel onClick={toggleAccordion}>
        <AccordionTitle>{props.title}</AccordionTitle>
        <Arrow rotate={!isActive} />
      </Panel>
      <AccordionContent animation={props.animation} active={isActive} maxHeight={contentHeight} ref={content}>
        {props.children}
      </AccordionContent>
    </AccordionSection>
  );
};

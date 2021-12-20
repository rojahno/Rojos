import { useState } from "react";
import styled from "styled-components";

interface HoverProps {
  children?: any;
  title?: string;
  content?: any;
  hoverable?: boolean;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const HoverContainer = styled.div<HoverProps>`
  /*position:fixed;
  top:0px;
  left:0px;
  height:100%;
  width:100%;
  */
  
  /*Fallback if gradeints don't work */
  background: #9b59b6;
  /*Linear gradient... */
  background: 
    radial-gradient(
     at center, #3498db, #9b59b6
    );
`;

export const RadientHover = (props: HoverProps) => {

  const [inElemnt, setInElement] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [debug, setDebug] = useState("")

  let mouseEnter = () => {
    setDebug("enter")
  }

  let mouseLeave = () => {
    setDebug("leaves")
  }

  let mouseMove = (e:any) => {
    setX(e.screenX);
    setY(e.screenY)
  }
  return (
    <HoverContainer onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={mouseMove}>
      
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt impedit unde commodi pariatur ullam nihil eveniet sequi non perferendis laudantium? Nihil tenetur ipsam voluptatum officiis
        deserunt quis nobis, sed ex facilis, odit ad explicabo iste eum quaerat non eligendi corporis doloribus nostrum, id quibusdam quo aliquam tempora excepturi amet? Rerum.
      </p>
      <p>
      Debug: {debug}
      </p>
      <p>
        Mouse coordinate: { x } { y }
      </p>

    </HoverContainer>
  );
};

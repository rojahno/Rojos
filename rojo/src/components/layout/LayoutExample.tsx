import styled from "styled-components";
import { OverflowContainer } from "./OverflowContainer";

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

const Box = styled.div`
  box-sizing: content-box;
  width: 300px;
  height: 100px;
  border: 10px solid black;
`;

export function LayoutExample() {
  return (
    <div>
      <h1>Layout example</h1>
      <Box>
        <OverflowContainer>
          Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat cumque expedita ipsum soluta doloribus id, atque similique consectetur reprehenderit aut obcaecati animi nobis ipsam
          laudantium vel? Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Magnam, en Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat cumque expedita ipsum soluta
          doloribus id, atque similique consectetur reprehenderit aut obcaecati animi nobis ipsam laudantium vel? Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Magnam, en Lorem5 ipsum
          dolor sit amet consectetur adipisicing elit. Corrupti fugiat cumque expedita ipsum soluta doloribus id, atque similique consectetur reprehenderit aut obcaecati animi nobis ipsam laudantium
          vel? Lorem6 ipsum dolor sit amet consectetur adipisicing elit. Magnam, en
          <button>hello</button>
        </OverflowContainer>
      </Box>
    </div>
  );
}

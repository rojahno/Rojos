import React from "react";

import styled from "styled-components";
import CircularLoader from "./CircularLoader";
import { Hourglass } from "./Hourglass";

/**
 * @summary An example of how to apply the different layout in this library.
 * @description A layout example
 * @returns
 */

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`;

export function LoadersExample() {
  return (
    <div>
      <Box>
        <Hourglass />
        <CircularLoader />
      </Box>
    </div>
  );
}

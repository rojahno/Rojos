import styled from "styled-components";
interface DividerProps {
  dotted?: boolean;
  rounded?: boolean;
}

export const Divider = styled.hr<DividerProps>``;
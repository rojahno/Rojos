import styled from "styled-components";
interface DividerProps {
    dotted?: boolean;
    rounded?: boolean;
}

export const Divider = styled.hr<DividerProps>`
    width: 100%;
    border-color: #333336;
`;

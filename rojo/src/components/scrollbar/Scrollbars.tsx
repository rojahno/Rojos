import styled from "styled-components";

export const MacScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 100px; 
    -webkit-border-radius: 100px;
  }

  &::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    -webkit-border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.61);
    border-radius: 100px;
    -webkit-border-radius: 100px;
  }

  /* add vertical min-height & horizontal min-width */
  ::-webkit-scrollbar-thumb:vertical {
    min-height: 10px;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    min-width: 10px;
  }
`;


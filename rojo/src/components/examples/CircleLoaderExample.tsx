import styled from "styled-components";
import { Content } from "../layout/Content";
import { BtSpinner } from "../Loaders/circles/BtSpinner";
import CircularLoader from "../Loaders/circles/CircularLoader";
import { NbSpinner } from "../Loaders/circles/NbSpinner";
import { LoadingBar } from "../Loaders/bar/LoadingBar";

const Spinners = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2em;
`;

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 50%;
  border: 1px solid;
  box-sizing: border-box;
  position: relative;
`;

export const CircleLoaderExample = () => {
  return (
    <Content>
      <Spinners>
        <SpinnerBox>
          <CircularLoader />
        </SpinnerBox>

        <SpinnerBox>
          <NbSpinner />
        </SpinnerBox>

        <SpinnerBox>
          <BtSpinner />
        </SpinnerBox>
        <SpinnerBox>
          <LoadingBar />
        </SpinnerBox>
      </Spinners>
    </Content>
  );
};

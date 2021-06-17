import styled from "styled-components";
import arrow from "../../images/arrow.svg";
const ArrowImage = styled.img<ArrowProps>`
  height: 100%;
  transform: ${(props) => (props.rotate ? "rotate(0deg)" : "rotate(90deg)")};
  transition-duration: 0.24s;
`;

const ArrowContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ArrowProps {
  rotate?: boolean;
}

export const Arrow = (props: ArrowProps) => {
  return (
    <ArrowContent>
      <ArrowImage rotate={props.rotate} src={arrow} />
    </ArrowContent>
  );
};

import styled from "styled-components";
import { RadientHover } from "../effects/Hover";
import { Box } from "../layout/Box";
import { ComponentExample } from "./ComponentExample";

const HoverBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoverText = styled.p`
  padding: 2em;
  color: #ffffffb3;
`;

export const HoverExample = () => {
  return (
    <ComponentExample title={"Hover examples"}>
      <h1>Radient hover</h1>

      <Box>
        <RadientHover backgroundColor={"#434343"} gradientColor={"#4f14cc"}>
          <HoverBox>
            <HoverText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel officiis laboriosam praesentium quasi natus, ut veritatis fugiat dignissimos placeat non consectetur quibusdam ea
              accusamus deserunt nesciunt! Quibusdam iusto, unde eligendi suscipit omnis exercitationem voluptate voluptatibus dolores? Porro nostrum vel sint. Autem reprehenderit totam molestiae
              eaque dicta animi aut repellat!
            </HoverText>
          </HoverBox>
          <HoverBox>
            <HoverText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel officiis laboriosam praesentium quasi natus, ut veritatis fugiat dignissimos placeat non consectetur quibusdam ea
              accusamus deserunt nesciunt! Quibusdam iusto, unde eligendi suscipit omnis exercitationem voluptate voluptatibus dolores? Porro nostrum vel sint. Autem reprehenderit totam molestiae
              eaque dicta animi aut repellat!
            </HoverText>
          </HoverBox>
        </RadientHover>
      </Box>
    </ComponentExample>
  );
};

import styled from "styled-components";
import { PageLayout } from "../displayPage/PageLayout";
import { RadientHover } from "../../components/effects/Hover";
import { ComponentExample } from "./ComponentExample";

const HoverBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const HoverText = styled.p`
  padding: 2em;
  color: #ffffffb3;
`;

export const HoverExample = () => {
  const title = "Effects";
  const summary = "The effects components ...";
  return (
    <PageLayout componentName={title} componentDescription={summary}>
      <ComponentExample title={"Hover examples"}>
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
      </ComponentExample>
    </PageLayout>
  );
};

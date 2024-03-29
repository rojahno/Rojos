import { useEffect } from "react";
import styled from "styled-components";
import { Accordion } from "../../components/dataDisplay/Accordion";
import { PageLayout } from "../displayPage/PageLayout";
import { SimpleContainer } from "../../components/layout/SimpleContainer";
import { ComponentExample } from "./ComponentExample";

const AccordionText = styled.p`
    font-weight: 400;
    font-size: 14px;
    text-align: left;
`;

export const AccordionExample = () => {
    const title = "Accordion";
    // const summary = "The accordion component ...";
    const mainBackgroundColor = "#3d3d3dee";
    useEffect(() => {
        //Prevents the auto scroll from the forced expanding accordion
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };
        scrollToTop();
    });
    return (
        <PageLayout componentName={title}>
            <ComponentExample title={"Collapsible example"} backgroundColor={mainBackgroundColor}>
                <h3>Normal accordion</h3>
                <SimpleContainer>
                    <Accordion title={"The title of the accordion"}>
                        <AccordionText>The content of the Accordion</AccordionText>
                    </Accordion>

                    <Accordion title={"The title of the accordion"}>
                        <AccordionText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem facilis fugit aliquam
                            nesciunt necessitatibus rem sint quibusdam, mollitia esse cum commodi id excepturi fugiat
                            tenetur veniam, perferendis reprehenderit veritatis asperiores nostrum nobis, at quasi
                            labore praesentium. Doloremque officia ipsa dolore repellat nobis quaerat amet ducimus natus
                            quam, temporibus veritatis nesciunt fugit dolor vel distinctio sapiente nemo eligendi unde
                            fugiat impedit! Vel a similique ipsa suscipit. Mollitia, et! Repudiandae libero soluta
                            voluptas quod provident aliquid odio optio qui sed, architecto blanditiis a quidem autem
                            laboriosam facilis doloremque pariatur ut exercitationem aspernatur placeat debitis
                            assumenda, temporibus incidunt! Rem molestiae saepe nesciunt.
                        </AccordionText>
                    </Accordion>
                    <Accordion title={"The title of the accordion"}>
                        <AccordionText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem facilis fugit aliquam
                            nesciunt necessitatibus rem sint quibusdam, mollitia esse cum commodi id excepturi fugiat
                            tenetur veniam, perferendis reprehenderit veritatis asperiores nostrum nobis, at quasi
                            labore praesentium. Doloremque officia ipsa dolore repellat nobis quaerat amet ducimus natus
                            quam, temporibus veritatis nesciunt fugit dolor vel distinctio sapiente nemo eligendi unde
                            fugiat impedit! Vel a similique ipsa suscipit. Mollitia, et! Repudiandae libero soluta
                            voluptas quod provident aliquid odio optio qui sed, architecto blanditiis a quidem autem
                            laboriosam facilis doloremque pariatur ut exercitationem aspernatur placeat debitis
                            assumenda, temporibus incidunt! Rem molestiae saepe nesciunt.
                        </AccordionText>
                    </Accordion>
                </SimpleContainer>
            </ComponentExample>

            <ComponentExample backgroundColor={mainBackgroundColor}>
                <h3>With animation</h3>
                <SimpleContainer>
                    <Accordion title={"The title of the accordion"} animation={true}>
                        <AccordionText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt repudiandae, eligendi
                            dolorem nam quod illo reprehenderit vero, corrupti dolores excepturi quidem animi vitae
                            accusantium repellendus eveniet? Fugiat, beatae architecto! Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Harum commodi rerum neque quaerat quasi reiciendis cumque
                            officiis ad asperiores quae? Totam cupiditate repellat mollitia cumque natus repudiandae
                            delectus vel veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias
                            veniam eius reiciendis vel molestiae eos quae, rem necessitatibus. Aliquid iste maxime
                            labore perspiciatis eum mollitia provident nihil dolorum iure.
                        </AccordionText>
                    </Accordion>
                    <Accordion title={"The title of the accordion"} animation={true}>
                        <AccordionText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt repudiandae, eligendi
                            dolorem nam quod illo reprehenderit vero, corrupti dolores excepturi quidem animi vitae
                            accusantium repellendus eveniet? Fugiat, beatae architecto! Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Harum commodi rerum neque quaerat quasi reiciendis cumque
                            officiis ad asperiores quae? Totam cupiditate repellat mollitia cumque natus repudiandae
                            delectus vel veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias
                            veniam eius reiciendis vel molestiae eos quae, rem necessitatibus. Aliquid iste maxime
                            labore perspiciatis eum mollitia provident nihil dolorum iure.
                        </AccordionText>
                    </Accordion>
                    <Accordion title={"The title of the accordion"} animation={true}>
                        <AccordionText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt repudiandae, eligendi
                            dolorem nam quod illo reprehenderit vero, corrupti dolores excepturi quidem animi vitae
                            accusantium repellendus eveniet? Fugiat, beatae architecto! Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Harum commodi rerum neque quaerat quasi reiciendis cumque
                            officiis ad asperiores quae? Totam cupiditate repellat mollitia cumque natus repudiandae
                            delectus vel veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias
                            veniam eius reiciendis vel molestiae eos quae, rem necessitatibus. Aliquid iste maxime
                            labore perspiciatis eum mollitia provident nihil dolorum iure.
                        </AccordionText>
                    </Accordion>
                </SimpleContainer>
            </ComponentExample>

            <ComponentExample backgroundColor={mainBackgroundColor}>
                <SimpleContainer>
                    <h3>Forced Expanded</h3>
                    <Accordion expanded={true} title={"This accordion is forced expanded"}>
                        <AccordionText>
                            The content of the Accordion Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos eveniet culpa consequatur ducimus eius natus cupiditate voluptates, perferendis,
                            at sed ipsum neque fuga sequi quia exercitationem repellendus quos deserunt? Quia!
                        </AccordionText>
                    </Accordion>

                    <Accordion title={"The title of the accordion"}>
                        <AccordionText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem facilis fugit aliquam
                            nesciunt necessitatibus rem sint quibusdam, mollitia esse cum commodi id excepturi fugiat
                            tenetur veniam, perferendis reprehenderit veritatis asperiores nostrum nobis, at quasi
                            labore praesentium. Doloremque officia ipsa dolore repellat nobis quaerat amet ducimus natus
                            quam, temporibus veritatis nesciunt fugit dolor vel distinctio sapiente nemo eligendi unde
                            fugiat impedit! Vel a similique ipsa suscipit. Mollitia, et! Repudiandae libero soluta
                            voluptas quod provident aliquid odio optio qui sed, architecto blanditiis a quidem autem
                            laboriosam facilis doloremque pariatur ut exercitationem aspernatur placeat debitis
                            assumenda, temporibus incidunt! Rem molestiae saepe nesciunt.
                        </AccordionText>
                    </Accordion>

                    <Accordion title={"The title of the accordion"}>
                        <AccordionText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt repudiandae, eligendi
                            dolorem nam quod illo reprehenderit vero, corrupti dolores excepturi quidem animi vitae
                            accusantium repellendus eveniet? Fugiat, beatae architecto! Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Harum commodi rerum neque quaerat quasi reiciendis cumque
                            officiis ad asperiores quae? Totam cupiditate repellat mollitia cumque natus repudiandae
                            delectus vel veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias
                            veniam eius reiciendis vel molestiae eos quae, rem necessitatibus. Aliquid iste maxime
                            labore perspiciatis eum mollitia provident nihil dolorum iure.
                        </AccordionText>
                    </Accordion>
                </SimpleContainer>
            </ComponentExample>
        </PageLayout>
    );
};

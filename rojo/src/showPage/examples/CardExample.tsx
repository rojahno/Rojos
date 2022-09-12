import { Card } from "../../components/cards/Card";
import { PageLayout } from "../displayPage/PageLayout";
import { ComponentExample } from "./ComponentExample";

export const CardExample = () => {
    return (
        <PageLayout componentName="Cards" >
            <ComponentExample title={"Card examples"}>
                <Card width={"10em"} height={"7em"} title={"Card Title"}>
                    Card Content
                </Card>

                <Card width={"10em"} height={"7em"} hoverable={true} title={"Hoverable card"}>
                    Hover this element
                </Card>
            </ComponentExample>
        </PageLayout>
    );
};

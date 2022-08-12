import { Card } from "../../components/cards/Card";
import { ComponentExample } from "./ComponentExample";

export const CardExample = () => {
    return (
        <ComponentExample title={"Card examples"}>
            <h1>Cards</h1>

            <Card width={"10em"} height={"7em"} title={"Card Title"}>
                Card Content
            </Card>
            <h1>Hoverable</h1>
            <Card width={"10em"} height={"7em"} hoverable={true} title={"Hoverable card"}>
                Hover this element
            </Card>
        </ComponentExample>
    );
};

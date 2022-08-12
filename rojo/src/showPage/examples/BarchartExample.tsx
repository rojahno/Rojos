import { Barchart } from "../../components/charts/Barchart";
import { PageLayout } from "../displayPage/PageLayout";
import { ComponentExample } from "./ComponentExample";

export const BarchartExample = () => {
    return (
        <PageLayout>
            <ComponentExample title={"Barchart"}>
                <h3>Normal barchart</h3>
                <Barchart />
            </ComponentExample>
        </PageLayout>
    );
};

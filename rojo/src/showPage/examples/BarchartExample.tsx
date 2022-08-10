import { Barchart } from "../../components/charts/Barchart";
import { PageLayout } from "../displayPage/PageLayout";
import { ComponentExample } from "./ComponentExample";

export const BarchartExample = () => {
    return (
        <PageLayout>
            <ComponentExample title={"Barchart"}>
                <Barchart />
            </ComponentExample>
        </PageLayout>
    );
};

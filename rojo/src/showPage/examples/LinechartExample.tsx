import { Linechart } from "../../components/charts/Linechart";
import { PageLayout } from "../displayPage/PageLayout";
import { ComponentExample } from "./ComponentExample";

export const LinechartExample = () => {
    return (
        <PageLayout>
            <ComponentExample title={"Linechart"}>
                <Linechart />
            </ComponentExample>
        </PageLayout>
    );
};

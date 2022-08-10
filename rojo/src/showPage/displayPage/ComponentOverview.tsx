import styled from "styled-components";
import { DataDisplayShowCase } from "../showcase/CollapsibleShowCase";
import { EffectsShowCase } from "../showcase/EffectsShowCase";
import { LayoutShowCase } from "../showcase/LayoutShowCase";
import { LoaderShowCase } from "../showcase/LoaderShowCase";
import { MiscShowCase } from "../showcase/MiscShowCase";

const OverviewContainer = styled.div`
    width: 100%;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const ComponentOverview = () => {
    return (
        <OverviewContainer>
            <LayoutShowCase />
            <LoaderShowCase />
            <DataDisplayShowCase />
            <EffectsShowCase />
            <MiscShowCase />
        </OverviewContainer>
    );
};

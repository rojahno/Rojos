import styled from "styled-components";
import { Divider } from "./Divider";
import { Grid } from "./Grid";

interface ShowCaseProps {
    title?: string;
    children?: any;
}
const ShowCaseContainer = styled.div`
    min-width: 40vw;
    width: 2em;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0px;
    padding: 0em 2em 2em 2em;
    margin: 0.5em;
`;

const ShowCaseTitle = styled.h1`
    align-self: flex-start;
`;

export const ShowCase = (props: ShowCaseProps) => {
    return (
        <div>
            <Divider />
            <ShowCaseContainer>
                <ShowCaseTitle> {props.title}</ShowCaseTitle>
                <Grid>{props.children}</Grid>
            </ShowCaseContainer>
        </div>
    );
};

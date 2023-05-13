import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const Pane = styled.div`
    flex: ${props => props.weight || 1};
    height: 100%;
    overflow: auto;
`;

export const SplitScreen = ({
    children: [left, right],
    leftWeight = 1,
    rightWeight = 1,
}) => {
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
}
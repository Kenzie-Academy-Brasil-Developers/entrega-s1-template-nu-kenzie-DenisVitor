import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 4rem;
    padding-bottom: 2rem;
`
export const StyledBodyContainer = styled.div`
    padding: 0 10vw;
    padding-bottom: 5vw;
    display: flex;
    @media screen and (max-width: 849px) {
        flex-wrap: wrap;
    }
`
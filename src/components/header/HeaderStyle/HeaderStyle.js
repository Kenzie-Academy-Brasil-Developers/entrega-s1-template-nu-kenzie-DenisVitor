import styled from "styled-components";


export const HeaderStyle = styled.header`
    display: flex;
    background-color: var(--grey-1);
    font-size: 1rem;
    width: 100%;
    padding: 1rem 10vw;
`
export const HeaderTitleStyle = styled.h1`
    font-family: var(--ff);
    color: var(--color-primary-1);
    font-weight: 900;
    & span{
        color: var(--grey-4);
    }
    cursor: pointer;
`
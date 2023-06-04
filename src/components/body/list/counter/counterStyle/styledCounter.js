import styled from "styled-components";

export const StyledCounterSection = styled.section`
    border: 1px solid var(--grey-2);
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding: 0 1.7rem;
    justify-content: center;
    width: clamp(14.75rem, 80vw, 23rem);
    height: 9rem;
    font-family: var(--ff);
    margin-top: -2.5rem;

`
export const StyledCounterTitle = styled.h2`
    align-items: center;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    font-weight: 800;

`
export const StyledCounterMoney = styled.span`
    color: var(--color-primary-1);
`
export const StyledCounterText = styled.p`
    font-size: 0.875rem;
    display: flex;
`
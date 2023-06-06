import styled from "styled-components";
import { StyledCounterMoney, StyledCounterText, StyledCounterTitle } from "../../../styles/typography";

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
export const CounterTitle = StyledCounterTitle
export const CounterMoney = StyledCounterMoney
export const CounterText = StyledCounterText

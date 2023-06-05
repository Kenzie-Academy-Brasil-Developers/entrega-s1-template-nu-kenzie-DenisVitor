import styled from "styled-components";
import { StyledMoney, StyledText } from "../../../../../styles/typography";
import { StyledListButton } from "../../../../../styles/button";

export const StyledList = styled.ul`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    .Despesa{
        border-left: 7px solid var(--grey-2);
    }
    .Entrada{
        border-left: 7px solid var(--color-secondary);
    }
    
    gap: 1rem;
`
export const StyledItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0.6rem 2rem;
    border-radius: 5px;
    background-color: var(--grey-1);
    gap: 0.5rem;
`
export const StyledListDivision = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ListText = StyledText
export const ListMoney = StyledMoney
export const ListButton = StyledListButton

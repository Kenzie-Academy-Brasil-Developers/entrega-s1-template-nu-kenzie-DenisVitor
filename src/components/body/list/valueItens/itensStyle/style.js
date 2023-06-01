import styled from "styled-components";

export const StyledList = styled.ul`
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
export const StyledText = styled.p`
    font-family: var(--ff);
    font-weight: 400;
    font-size: 14px;
    
`
export const StyledMoney = styled.h4`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: right;
`
export const StyledListButton = styled.button`
    width: 5rem;
    font-size: 12px;
    border-radius: 2px;
    border: none;
    outline: none;
    background-color: var(--grey-2);
    padding: 0.4rem 1rem;
    text-align: center;
    align-self: self-end;
`
export const StyledListDivision = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
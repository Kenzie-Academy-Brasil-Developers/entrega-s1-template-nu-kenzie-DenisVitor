import styled from "styled-components";
export const StyledButton = styled.button`
        margin-top: 2rem;
        font-size: var(--fs-3);
        font-weight: var(--fw-regular);
        padding: 0.5rem;
        border: none;
        outline: none;
        background-color: var(--color-primary-1);
        color: var(--grey-1);
        border-radius: 10px;
        height: 3rem;
        transition: 0.2s ease-in-out;
        :hover{
                background-color: var(--color-primary-2);
        }
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
    transition: 0.2s ease-in-out;
    :hover{
        background-color: var(--grey-3);
    }
`
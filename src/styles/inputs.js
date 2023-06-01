import styled from "styled-components";

export const StyledTextInput = styled.input`
    border: none;
    font-size: 16px;
    border-radius: 5px;
    background-color: var(--grey-2);
    padding: 0.8rem;
    color: var(--grey-3);
    font-size: var(--fs-3);
    ::placeholder{
        color: var(--grey-3);
        font-size: 16px;
    } 
`
export const StyledNumberInput = styled.input`
    border: none;
    border-radius: 5px;
    background-color: var(--grey-2);
    padding: 0.8rem;
    color: var(--grey-3);
    font-size: var(--fs-3);
    ::placeholder{
        color: var(--grey-3);
    }
`
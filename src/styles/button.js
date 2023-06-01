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
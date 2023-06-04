import styled from "styled-components";

export const StyledSection = styled.section`
   margin-top: 2rem;
   margin-left: 2rem;
   font-family: var(--ff);
   display: flex;
   flex-direction: column;
   gap: 1rem;
   width: 100%;
   @media screen and (max-width: 849px){
      margin-left: 0;
   }
`
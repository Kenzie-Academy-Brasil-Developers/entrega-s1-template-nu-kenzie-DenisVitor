import styled from "styled-components";
import { StyledButton } from "../../../../styles/button";
import { StyledNumberInput, StyledTextInput } from "../../../../styles/inputs";
import { StyledOption, StyledSelect } from "../../../../styles/select";
import { StyledLabel, StyledMicroText } from "../../../../styles/typography";

export const StyledForm = styled.form`
    margin-top: 2rem;
    display: flex;
    font-family: var(--ff);
    flex-direction: column;
    gap: 1rem;
    width: clamp(14.75rem, 80vw, 23rem);
    border: 1.5px solid var(--grey-2);
    padding: 1.2rem;
    height: 27rem;
`

export const NewLabel = StyledLabel
export const NewInputText = StyledTextInput
export const NewNumberInput = StyledNumberInput
export const NewSelect = StyledSelect
export const NewOption = StyledOption
export const NewButton = StyledButton
export const NewParagraph = StyledMicroText

export const NullOption = styled.option`
    display: none;
`
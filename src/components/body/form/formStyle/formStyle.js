import styled from "styled-components";
import { StyledButton } from "../../../../styles/button";
import { StyledForm } from "../../../../styles/form";
import { StyledNumberInput, StyledTextInput } from "../../../../styles/inputs";
import { StyledOption, StyledSelect } from "../../../../styles/select";
import { StyledLabel, StyledMicroText } from "../../../../styles/typography";

export const NewForm = StyledForm
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
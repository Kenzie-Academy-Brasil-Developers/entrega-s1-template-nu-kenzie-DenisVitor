import { useState } from "react";
import {
  NewButton,
  StyledForm,
  NewInputText,
  NewLabel,
  NewNumberInput,
  NewOption,
  NewParagraph,
  NullOption,
} from "./formStyle/formStyle";
import { StyledSelect } from "../../../styles/select";
import { v4 as uuidv4} from 'uuid'

export function BodyForm({setValueList}) {
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");

  const addNewValue = () => {
    const id =  uuidv4()
    const newValue = { id, desc, value, select}
    setValueList((ValueList) => [...ValueList, newValue])
  }

  const submitValue = (e) => {
    e.preventDefault();
    addNewValue()
    setDesc("");
    setValue("");
    setSelect("")
  };

  return (
    <StyledForm onSubmit={submitValue}>
      <NewLabel>Descrição</NewLabel>
      <NewInputText
        placeholder="Digite aqui sua descrição"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <NewParagraph>Ex: Compra de roupas</NewParagraph>
      <NewLabel>Valor (R$)</NewLabel>
      <NewNumberInput
        placeholder="1"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <NewLabel>Tipo de valor</NewLabel>
      <StyledSelect
        onChange={(e) => setSelect(e.target.value)}
        value={select}
        required
      >
        <NullOption defaultValue={NullOption} value="">Entrada</NullOption>
        <NewOption value="Entrada">Entrada</NewOption>
        <NewOption value="Despesa">Despesa</NewOption>
      </StyledSelect>
      <NewButton type="submit">Inserir valor</NewButton>
    </StyledForm>
  );
}

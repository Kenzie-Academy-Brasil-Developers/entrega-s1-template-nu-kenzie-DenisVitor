import React from "react"
import { StyledItem, StyledList, StyledListButton, StyledListDivision, StyledMoney, StyledText } from "./itensStyle/style"
import { StyledTitle } from "../../../../styles/typography"

export const ValueItens = ({valueList, setValueList}) => {
    const removeValueItem = (valueId) => {
        setValueList((valueList) => valueList.filter(value => value.id !== valueId))
    }
    return (
        <StyledList>
            {valueList.map((value) => {
                const monetaryValue = parseFloat(value.value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) 
                return(
                    <StyledItem className={value.select} key={value.id}>
                        <StyledTitle>{value.desc}</StyledTitle>
                        <StyledMoney>{monetaryValue}</StyledMoney>
                        <StyledListDivision>
                            <StyledText>{value.select}</StyledText>
                            <StyledListButton onClick={() => removeValueItem(value.id)}>Excluir</StyledListButton>
                        </StyledListDivision>
                    </StyledItem>
                )
            })}
        </StyledList>
    )

} 
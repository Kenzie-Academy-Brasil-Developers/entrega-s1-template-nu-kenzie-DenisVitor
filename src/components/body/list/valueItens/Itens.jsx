import React from "react"
import { StyledItem, StyledList, ListButton, StyledListDivision, ListMoney, ListText } from "./itensStyle/style"
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
                        <ListMoney>{monetaryValue}</ListMoney>
                        <StyledListDivision>
                            <ListText>{value.select}</ListText>
                            <ListButton onClick={() => removeValueItem(value.id)}>Excluir</ListButton>
                        </StyledListDivision>
                    </StyledItem>
                )
            })}
        </StyledList>
    )

} 
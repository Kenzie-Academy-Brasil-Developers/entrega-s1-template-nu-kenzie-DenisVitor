import { StyledCounterMoney, StyledCounterSection, StyledCounterText, StyledCounterTitle } from "./counterStyle/styledCounter"


export function CounterValues({valueList}){
    const valuesToSum = valueList.filter(item => item.select === 'Entrada')
    const sumValue = valuesToSum.reduce((acc, item) => acc + Number(item.value), 0)
    
    const valuesToSub = valueList.filter(item => item.select === 'Despesa')
    const subValue = valuesToSub.reduce((acc, item) => acc + Number(item.value), 0)
    
    const totalMoney = sumValue - subValue

    const monetaryTotalMoney = totalMoney.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return (
        <StyledCounterSection>
            <StyledCounterTitle>Valor total: <StyledCounterMoney>{monetaryTotalMoney}</StyledCounterMoney></StyledCounterTitle>
            <StyledCounterText>O valor se refere ao saldo</StyledCounterText>
        </StyledCounterSection>
    )
}
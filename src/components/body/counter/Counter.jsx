import { CounterMoney, StyledCounterSection, CounterText, CounterTitle } from "./styledCounter"


export function CounterValues({valueList}){
    const valuesToSum = valueList.filter(item => item.select === 'Entrada')
    const sumValue = valuesToSum.reduce((acc, item) => acc + Number(item.value), 0)
    
    const valuesToSub = valueList.filter(item => item.select === 'Despesa')
    const subValue = valuesToSub.reduce((acc, item) => acc + Number(item.value), 0)
    
    const totalMoney = sumValue - subValue

    const monetaryTotalMoney = totalMoney.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return (
        <StyledCounterSection>
            <CounterTitle>Valor total: <CounterMoney>{monetaryTotalMoney}</CounterMoney></CounterTitle>
            <CounterText>O valor se refere ao saldo</CounterText>
        </StyledCounterSection>
    )
}
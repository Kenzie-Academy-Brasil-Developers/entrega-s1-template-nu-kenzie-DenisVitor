import { ValueItens } from "../valueItens/Itens"
import { StyledSection } from "./valueList"

export function ValueList({valueList, setValueList}){
    return(
        <StyledSection>
            <h1>Resumo financeiro</h1>
            { valueList.length > 0 ? (
                <>
                    <ValueItens setValueList={setValueList} valueList={valueList}/>
                </>
            ) : (
                <h1>Você ainda não possui nenhum lançamento</h1>
            )}
        </StyledSection>
    )
}

import { useState } from "react";
import { RenderValueList } from "./components/body/list/ValueList";
import { BodyForm } from "./components/body/form/Form";
import { Header } from "./components/header/Header";
import { GlobalVariables } from "./styles/global/global";
import { GlobalResetStyle } from "./styles/global/reset";
import { CounterValues } from "./components/body/list/counter/Counter";
import {
  StyledBodyContainer,
  StyledContainer,
} from "./styles/global/containers";

function App() {
  const [valueList, setValueList] = useState([]);
  return (
    <>
      <GlobalResetStyle />
      <GlobalVariables />
      <Header />
      <StyledBodyContainer>
        <StyledContainer>
          <BodyForm setValueList={setValueList} />
          {valueList.length > 0 ? (
            <CounterValues valueList={valueList} />
          ) : null}
        </StyledContainer>
        <RenderValueList setValueList={setValueList} valueList={valueList} />
      </StyledBodyContainer>
    </>
  );
}
export default App;

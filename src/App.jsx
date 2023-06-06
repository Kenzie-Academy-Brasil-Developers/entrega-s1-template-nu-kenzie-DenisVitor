import { useState } from "react";
import { ValueList } from "./components/body/list/ValueList.jsx"
import { CounterValues } from "./components/body/counter/Counter";
import { BodyForm } from "./components/body/form/Form";
import { Header } from "./components/header/Header";
import { GlobalVariables } from "./styles/global/global";
import { GlobalResetStyle } from "./styles/global/reset";

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
        <ValueList setValueList={setValueList} valueList={valueList} />
      </StyledBodyContainer>
    </>
  );
}
export default App;

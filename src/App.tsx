import styled from "@emotion/styled";

import Form from "car-form";
import { StepsContextProvider } from "car-form/state/steps-context";
import * as Colors from "style/colors";

const StyledContainer = styled.div({
  backgroundColor: Colors.lightGrey,
  width: "100%",
  minHeight: "100vh",
  "@media screen and (min-width: 575px)": {
    margin: "0 auto",
  },
});

function App() {
  return (
    <StyledContainer>
      <StepsContextProvider>
        <Form />
      </StepsContextProvider>
    </StyledContainer>
  );
}

export default App;

import React, { useContext } from "react";
import styled from "@emotion/styled";

import { StepsContext } from "car-form/state/steps-context";

const StyledWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
});

const StyledMessage = styled.p({
  fontSize: 30,
  marginBottom: 20,
});

const StyledButton = styled.button({
  fontSize: 16,
  padding: "6px 10px",
  cursor: "pointer",
});

const ThanksPage = () => {
  const { setStep } = useContext(StepsContext);
  return (
    <StyledWrapper>
      <StyledMessage>Thank You</StyledMessage>
      <StyledButton
        onClick={() => {
          setStep(0);
        }}
      >
        Sell another car
      </StyledButton>
    </StyledWrapper>
  );
};

export { ThanksPage };

import React, { useContext } from "react";
import { StepsContext } from "helpers/steps-context";

const ThanksPage = () => {
  const { setStep } = useContext(StepsContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <p style={{ fontSize: 30, marginBottom: 20 }}>Thank You</p>
      <button
        style={{ fontSize: 16, padding: "6px 10px", cursor: "pointer" }}
        onClick={() => {
          setStep(0);
        }}
      >
        Sell another car
      </button>
    </div>
  );
};

export { ThanksPage };

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

const StepsContext = createContext<{
  step: Number;
  setStep: Dispatch<SetStateAction<number>>;
}>({ step: 0, setStep: (step) => step });

const StepsContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0);

  return (
    <StepsContext.Provider value={{ step, setStep }}>
      {children}
    </StepsContext.Provider>
  );
};

export { StepsContext, StepsContextProvider };

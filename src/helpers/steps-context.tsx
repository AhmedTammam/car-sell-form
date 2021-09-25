import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const StepsContext = createContext<{
  step: Number;
  setStep: Dispatch<SetStateAction<number>>;
}>({ step: 0, setStep: (step) => step });

export const StepsContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0);

  return (
    <StepsContext.Provider value={{ step, setStep }}>
      {children}
    </StepsContext.Provider>
  );
};

import { useContext } from "react";

import { StepsContext } from "helpers/steps-context";
import { ManufacturingYear } from "./form-steps/manufacturing-year";

const Form = () => {
  const { step } = useContext(StepsContext);

  const renderChildren = (step: Number) => {
    switch (step) {
      case 0:
        return <ManufacturingYear />;
      default:
        return null;
    }
  };
  return <div>{renderChildren(step)}</div>;
};

export default Form;

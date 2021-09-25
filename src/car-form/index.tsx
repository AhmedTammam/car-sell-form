import { useContext } from "react";

import { StepsContext } from "car-form/state/steps-context";
import { ManufacturingYear } from "car-form/steps/manufacturing-year";
import { BrandsList } from "car-form/steps/brands-list";
import { BrandModelsList } from "car-form/steps/brand-models-list";
import { ModelVersionsList } from "car-form/steps/model-versions-list";
import { UserInfo } from "car-form/steps/user-info";
import { ThanksPage } from "car-form/steps/thanks-page";

const Form = () => {
  const { step } = useContext(StepsContext);

  const renderChildren = (step: Number) => {
    switch (step) {
      case 0:
        return <ManufacturingYear />;
      case 1:
        return <BrandsList />;
      case 2:
        return <BrandModelsList />;
      case 3:
        return <ModelVersionsList />;
      case 4:
        return <UserInfo />;
      case 5:
        return <ThanksPage />;
      default:
        return null;
    }
  };
  return <div>{renderChildren(step)}</div>;
};

export default Form;

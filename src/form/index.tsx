import { useContext } from "react";

import { StepsContext } from "helpers/steps-context";
import { ManufacturingYear } from "form/form-steps/manufacturing-year";
import { BrandsList } from "form/form-steps/brands-list";
import { BrandModelsList } from "form/form-steps/brand-models-list";
import { ModelVersionsList } from "form/form-steps/model-versions-list";
import { UserInfo } from "form/form-steps/user-info";
import { ThanksPage } from "form/form-steps/thanks-page";

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

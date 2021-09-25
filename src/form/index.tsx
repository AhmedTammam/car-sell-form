import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { StepsContext } from "helpers/steps-context";
import { ManufacturingYear } from "./form-steps/manufacturing-year";
import { BrandsList } from "./form-steps/brands-list";
import { setStockData } from "store/slices/form-slice";
import { BrandModelsList } from "./form-steps/brand-models-list";

const Form = () => {
  const { step } = useContext(StepsContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStockData());
  }, [dispatch]);

  const renderChildren = (step: Number) => {
    switch (step) {
      case 0:
        return <ManufacturingYear />;
      case 1:
        return <BrandsList />;
      case 2:
        return <BrandModelsList />;
      default:
        return null;
    }
  };
  return <div>{renderChildren(step)}</div>;
};

export default Form;

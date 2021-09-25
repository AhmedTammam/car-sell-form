import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "form/shared/header";
import {
  StyledFormElementWrapper,
  StyledListItem,
} from "form/form-steps/manufacturing-year";
import FilteredInput from "form/shared/filtered-input";
import {
  selectHeaderInfo,
  selectCarModelsList,
  updateCarsByModel,
} from "store/slices/form-slice";
import { StepsContext } from "helpers/steps-context";

const BrandModelsList = () => {
  const { setStep } = useContext(StepsContext);
  const info = useSelector(selectHeaderInfo);
  const models = useSelector(selectCarModelsList);
  const dispatch = useDispatch();

  return (
    <div>
      <Header title="body style" subTitle={info} />
      <FilteredInput
        dataToFiltered={models}
        renderFilteredData={(filteredData) => {
          return (
            <StyledFormElementWrapper>
              {filteredData.map((model: string) => (
                <StyledListItem
                  key={model}
                  onClick={() => {
                    dispatch(updateCarsByModel(model));
                    setStep(3);
                  }}
                >
                  {model}
                </StyledListItem>
              ))}
            </StyledFormElementWrapper>
          );
        }}
      />
    </div>
  );
};

export { BrandModelsList };

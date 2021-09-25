import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "components/header";
import {
  StyledFormElementWrapper,
  StyledListItem,
} from "car-form/steps/manufacturing-year";
import FilteredInput from "components/filtered-input";
import {
  selectHeaderInfo,
  selectCarModelsList,
  updateCarsByModel,
} from "car-form/state/form-slice";
import { StepsContext } from "car-form/state/steps-context";

export const BrandModelsList = () => {
  const { setStep } = useContext(StepsContext);
  const info = useSelector(selectHeaderInfo);
  const models = useSelector(selectCarModelsList);
  const dispatch = useDispatch();

  return (
    <div>
      <Header title="Select Model" subTitle={info} />
      <FilteredInput
        placeholder="Search for model"
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

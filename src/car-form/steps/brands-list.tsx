import styled from "@emotion/styled";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBrandsList,
  selectHeaderInfo,
  updateCarsByBrand,
} from "car-form/state/form-slice";
import { Header } from "components/header";
import { StyledFormElementWrapper } from "car-form/steps/manufacturing-year";
import FilteredInput from "components/filtered-input";
import * as Colors from "style/colors";
import { StepsContext } from "car-form/state/steps-context";

const StyledCarItem = styled.div({
  borderBottom: `1px solid ${Colors.darkGrey}`,
  padding: "10px 0 10px 8px",
  fontSize: 12,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.darkGrey,
  },
});

export const BrandsList = () => {
  const { setStep } = useContext(StepsContext);
  const brandsList = useSelector(selectBrandsList);
  const info = useSelector(selectHeaderInfo);

  const dispatch = useDispatch();

  return (
    <div>
      <Header title="Select Brand" subTitle={info} />
      <FilteredInput
        placeholder="Search for brand"
        dataToFiltered={brandsList}
        renderFilteredData={(brands) => {
          return (
            <StyledFormElementWrapper style={{ flexDirection: "column" }}>
              {brands.length ? (
                brands.map((text: string) => (
                  <StyledCarItem
                    key={text}
                    onClick={() => {
                      dispatch(updateCarsByBrand(text));
                      setStep(2);
                    }}
                  >
                    {text}
                  </StyledCarItem>
                ))
              ) : (
                <p>please enter valid brand</p>
              )}
            </StyledFormElementWrapper>
          );
        }}
      />
    </div>
  );
};

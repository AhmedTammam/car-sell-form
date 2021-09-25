import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import { Header } from "components/header";
import FilteredInput from "components/filtered-input";
import {
  selectHeaderInfo,
  selectModelVersionsList,
  updateCarsModelByVersion,
} from "car-form/state/form-slice";
import { StepsContext } from "car-form/state/steps-context";
import * as Colors from "style/colors";

const StyledRadioBtnWrapper = styled.div({
  display: "flex",
  padding: 10,
});

const StyledRadioBtnTitle = styled.p({
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 6,
});

export const ModelVersionsList = () => {
  const modelVersionsList = useSelector(selectModelVersionsList);
  const info = useSelector(selectHeaderInfo);
  const { setStep } = useContext(StepsContext);
  const dispatch = useDispatch();

  const renderVersionPoints = (version: string) => {
    const versionPointsList = version.split(",");
    const title = versionPointsList[0].substr(
      versionPointsList[0].indexOf(".") + 2
    );
    return (
      <>
        <StyledRadioBtnTitle>{title}</StyledRadioBtnTitle>
        <p style={{ color: Colors.darkGrey }}>{version}</p>
      </>
    );
  };

  return (
    <div>
      <Header title="Select Version" subTitle={info} />
      <FilteredInput
        placeholder="Search for model versions"
        dataToFiltered={modelVersionsList}
        renderFilteredData={(filteredData) => {
          return filteredData.map((version, index) => (
            <StyledRadioBtnWrapper
              key={index}
              onClick={() => {
                dispatch(updateCarsModelByVersion(version));
                setStep(4);
              }}
            >
              <input
                type="radio"
                id={`${index}`}
                name="version"
                value={version}
              />
              <label htmlFor={`${index}`} style={{ marginLeft: 4 }}>
                {renderVersionPoints(version)}
              </label>
            </StyledRadioBtnWrapper>
          ));
        }}
      />
    </div>
  );
};

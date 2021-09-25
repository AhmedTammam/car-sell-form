import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "form/shared/header";
import FilteredInput from "form/shared/filtered-input";
import {
  selectHeaderInfo,
  selectModelVersionsList,
  updateCarsModelByVersion,
} from "store/slices/form-slice";
import { StepsContext } from "helpers/steps-context";
import * as Colors from "design-system/colors";

const ModelVersionsList = () => {
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
        <p
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 6,
          }}
        >
          {title}
        </p>
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
            <div
              key={index}
              style={{ display: "flex", padding: 10 }}
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
            </div>
          ));
        }}
      />
    </div>
  );
};

export { ModelVersionsList };

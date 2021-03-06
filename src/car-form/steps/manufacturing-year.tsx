import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import { Header } from "components/header";
import * as Colors from "style/colors";
import {
  selectManufacturingYearList,
  setStockData,
  updateCarsByYear,
} from "car-form/state/form-slice";
import { StepsContext } from "car-form/state/steps-context";

const StyledFormElementWrapper = styled.div({
  padding: 10,
  display: "flex",
  flexWrap: "wrap",
  gap: "10px 23px",
  alignContent: "stretch",
});

const StyledListItem = styled.p({
  padding: 6,
  border: `1px solid ${Colors.darkGrey}`,
  borderRadius: 3,
  fontSize: 12,
  minWidth: "16%",
  display: "",
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.darkGrey,
  },
  "@media screen and (max-width: 575px)": {
    width: "15%",
  },
});

const ManufacturingYear = () => {
  const yearsList = useSelector(selectManufacturingYearList);
  const { setStep } = useContext(StepsContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStockData());
  }, [dispatch]);

  return (
    <>
      <Header title="Select Year" />
      <StyledFormElementWrapper>
        {yearsList.map((year: number) => (
          <StyledListItem
            key={year}
            onClick={() => {
              dispatch(updateCarsByYear(year));
              setStep(1);
            }}
          >
            {year}
          </StyledListItem>
        ))}
      </StyledFormElementWrapper>
    </>
  );
};

export { ManufacturingYear, StyledFormElementWrapper, StyledListItem };

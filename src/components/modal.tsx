import React, { Dispatch, useContext, SetStateAction } from "react";
import styled from "@emotion/styled";

import { StyledSubmitBtn } from "car-form/steps/user-info";
import { StepsContext } from "car-form/state/steps-context";

import * as Colors from "style/colors";
import { useSelector } from "react-redux";
import { selectFullUserInfo } from "car-form/state/form-slice";

const StyledModalWrapper = styled.div({
  position: "absolute",
  height: "100%",
  width: "100%",
  top: "50%",
  background: Colors.white,
  borderRadius: "5px",
  border: `1px solid ${Colors.darkGrey}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "0px 0px 17px -6px",
});

const StyledInfo = styled.span({ fontStyle: "italic", color: Colors.green });
const StyledCarInfo = styled.span({
  fontStyle: "italic",
  border: `1px groove ${Colors.darkGrey}`,
  borderRadius: "5px",
  padding: 5,
  margin: "0 10px 10px 0",
});

const SuccessModal = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { setStep } = useContext(StepsContext);
  const userInfo = useSelector(selectFullUserInfo);
  const { firstName, email, phone, make, model, year, versions } = userInfo;
  return (
    <StyledModalWrapper>
      <div
        style={{
          maxWidth: 500,
          margin: "0 auto",
          padding: 20,
        }}
      >
        <p
          style={{
            color: Colors.darkGrey,
            marginBottom: 20,
            lineHeight: "2rem",
          }}
        >
          Thank yoy Mr <StyledInfo>{firstName}</StyledInfo>, We have messaged
          you to <StyledInfo>{email}</StyledInfo>, one of our customers service
          will contact you at <StyledInfo>{phone}</StyledInfo> to confirm your
          car decision:
        </p>
        <p style={{ display: "flex", flexWrap: "wrap", marginBottom: 30 }}>
          <StyledCarInfo>{make}</StyledCarInfo>
          <StyledCarInfo>{model}</StyledCarInfo>
          <StyledCarInfo>{year}</StyledCarInfo>
          <StyledCarInfo>{versions[0]}</StyledCarInfo>
        </p>
        <StyledSubmitBtn
          onClick={() => {
            localStorage.setItem("FULL_USER_INFO", JSON.stringify(userInfo));
            setShowModal(false);
            setStep(5);
          }}
        >
          Confirm and Close
        </StyledSubmitBtn>
      </div>
    </StyledModalWrapper>
  );
};

export { SuccessModal };

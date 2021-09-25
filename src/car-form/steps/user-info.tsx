import { useState } from "react";
import styled from "@emotion/styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Header } from "components/header";
import { selectHeaderInfo, updateUserInfo } from "car-form/state/form-slice";
import * as Colors from "style/colors";
import { SuccessModal } from "components/modal";

const StyledInputWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: 6,
  marginBottom: 8,
  backgroundColor: "#fff",
  border: `1px solid ${Colors.darkGrey}`,
  borderRadius: 4,
  position: "relative",
  ">label": {
    fontSize: 10,
  },
  ">span": {
    position: "absolute",
    fontSize: 10,
    right: 6,
    color: Colors.red,
    width: "65%",
    textAlign: "end",
  },
});

const StyleInput = styled.input({
  border: "none",
  background: "transparent",
  height: 20,
  "&:focus-visible": {
    outline: "none",
  },
  "&:visited ": {
    backgroundColor: "transparent !important",
  },
});

export const StyledSubmitBtn = styled.button({
  width: "100%",
  height: 30,
  background: Colors.green,
  color: "#fff",
  border: "none",
  borderRadius: 4,
});

interface IFormInputs {
  firstName: string;
  email: string;
  phone: string;
}

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const schema = yup.object({
  firstName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
});

const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const info = useSelector(selectHeaderInfo);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    dispatch(updateUserInfo(data));
    setShowModal(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <Header title="User Details" subTitle={info} />
      <p
        style={{
          width: "80%",
          margin: "10px auto",
          textAlign: "center",
          fontSize: 12,
          color: "grey",
        }}
      >
        Please enter Your information to contact you
      </p>
      <form style={{ padding: 6 }} onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
          <label style={{ marginBottom: 4 }} htmlFor="fullName">
            Full Name
          </label>
          <StyleInput
            type="text"
            {...register("firstName")}
            placeholder="First Name"
          />
          <span>{errors.firstName?.message}</span>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label style={{ marginBottom: 4 }}>Email</label>
          <StyleInput type="email" {...register("email")} placeholder="Email" />
          <span>{errors.email?.message}</span>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label style={{ marginBottom: 4 }}>Phone Number</label>
          <StyleInput {...register("phone")} placeholder="123-123-1234" />
          <span>{errors.phone?.message}</span>
        </StyledInputWrapper>
        <StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
      </form>
      {showModal && <SuccessModal setShowModal={setShowModal} />}
    </div>
  );
};

export { UserInfo };

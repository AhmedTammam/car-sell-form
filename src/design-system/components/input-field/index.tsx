import styled from "@emotion/styled";
import React, { ChangeEvent } from "react";
import SearchIcon from "design-system/components/input-field/search-icon.png";
import * as Colors from "design-system/colors";

const StyledSearchWrapper = styled.div({
  display: "flex",
  position: "relative",
});
const StyleInput = styled.input({
  width: "100%",
  height: 30,
  border: "none",
  borderBottom: `1px solid ${Colors.darkGrey}`,
  backgroundColor: "transparent",
  paddingLeft: 10,
  margin: "0 12px 12px",
  "&:focus-visible": {
    outline: "none",
  },
});

const StyledIcon = styled.button({
  position: "absolute",
  right: 8,
  height: 28,
  border: "none",
  background: "none",
  cursor: "pointer",
});

const InputField = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <StyledSearchWrapper>
      <StyleInput type="text" onChange={onChange} placeholder={placeholder} />
      <StyledIcon type="button">
        <img src={SearchIcon} alt="search-icon" style={{ width: 15 }} />
      </StyledIcon>
    </StyledSearchWrapper>
  );
};

export { InputField };

import styled from "@emotion/styled";

const StyledHeader = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: 100,
  boxShadow: "0px 5px 13px -10px",
  backgroundColor: "#fff",
  marginBottom: 20,
});

const StyledTitle = styled.p({
  fontSize: 20,
  fontWeight: 600,
});

const StyledSubTitle = styled.p({
  fontSize: 14,
  color: "grey",
  marginTop: 4,
});

const Header = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string | Number;
}) => {
  return (
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      {subTitle && <StyledSubTitle>{subTitle}</StyledSubTitle>}
    </StyledHeader>
  );
};

export { Header };

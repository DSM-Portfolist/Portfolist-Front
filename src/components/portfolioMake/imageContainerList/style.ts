import styled from "@emotion/styled";

export const MainWrapper = styled.section`
  header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  button[type="button"] {
    margin-bottom: 15px;
    cursor: pointer;
    background-color: white;
    font-size: 18px;
    color: #ff7659;
    cursor: pointer;
    font-weight: 700;
  }
`;

export const ImageWrapeerList = styled.div`
  margin-top: 15px;
  &:nth-of-type(n + 2) {
    margin-bottom: 60px;
  }
  .Title {
    width: 100%;

    font-weight: 500;
    font-size: 22px;
    &::placeholder {
      color: #8b8b8b;
    }
  }
  .MinusButton {
    cursor: pointer;
    margin-right: 25px;
  }
`;

export const ImageListSection = styled.section`
  padding: 25px 25px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  margin-top: 15px;
  display: flex;
`;

export const ContentWrapper = styled.div`
  width: 58%;
  height: 100%;
`;

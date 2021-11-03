import styled from "@emotion/styled";

export const MainWrapper = styled.section`
  header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  button[type="button"] {
    width: 140px;
    height: 40px;
    background: #ff7659;
    border-radius: 20px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const ImageWrapeerList = styled.div`
  .Title {
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    &::placeholder {
      color: #8b8b8b;
    }
  }
`;

export const ImageListSection = styled.section`
  padding: 30px 0%;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  margin-top: 30px;
  display: flex;
`;

export const ImageWrapper = styled.div`
`;

export const ContentWrapper = styled.div`

`;
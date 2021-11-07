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
  margin-top: 15px;
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
  padding: 30px 30px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  margin-top: 15px;
  display: flex;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  label {
    width: 280px;
    height: 190px;
    background-color: #f2f2f2;
    border: dotted #979797 1px;
    text-align: center;
    margin: auto 0;
    line-height: 190px;
    color: #989898;
  }
`;

export const ContentWrapper = styled.div`
  width: 58%;
  height: 100%;
`;

import styled from "@emotion/styled";

export const LicenseWrapper = styled.section`
  .infoContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #7c7c7c;
    margin-right: 15px;
  }
  img {
    cursor: pointer;
  }
`;

export const HeaderButton = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  input {
    &::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: rgba(85, 85, 85, 0.4);
    }
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
  }
  div {
    width: 1px;
    height: 18px;
    background: rgba(85, 85, 85, 0.4);
    margin: 0 5px 0 10px;
  }
  img {
    margin-left: 10px;
    cursor: pointer;
  }
`;

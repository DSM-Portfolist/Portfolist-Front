import styled from "@emotion/styled";

export const LicenseWrapper = styled.section`
  .infoContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;

    .addContent {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #bbbbbb;
      cursor: pointer;
      margin-top: 30px;
    }
  }
`;

export const MapWrapper = styled.div`
  border: 1px solid #e9e9e9;
  padding: 30px;

  &:nth-of-type(2) {
    margin-top: 15px;
  }

  &:nth-of-type(n + 3) {
    margin-top: 30px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    width: 100%;
    height: 35px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-right: 5px;
    color: black;

    &::placeholder {
      color: #7c7c7c;
    }
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

  .addContent {
    font-size: 18px;
    color: #ff7659;
    cursor: pointer;
    font-weight: 700;
    margin-bottom: 15px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  img {
    display: none;
  }

  &:hover {
    img {
      display: flex;
    }
  }

  input {
    width: 97%;
    font-weight: 500;
    height: 30px;
    font-size: 18px;
    color: #000000;

    &::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: rgba(85, 85, 85, 0.4);
    }

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background: #ff7659;
      border-radius: 5px;
    }
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

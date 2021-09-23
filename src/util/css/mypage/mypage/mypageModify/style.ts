import styled from "@emotion/styled";

export const MainSection = styled.section`
  width: 760px;
  margin-top: 90px;
`;

export const MyProfileWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 185px;
  padding-right: 22px;
  border-right: solid #e7e7e7 2px;
  & img {
    margin-top: 12px;
  }
  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 100%;
    height: 40px;
    cursor: pointer;
    background: #ff7d64;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(153, 153, 153, 0.25);
    font-family: "Noto Sans KR";
    font-style: 500;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
  }
  & div {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    box-shadow: 0px 4px 8px rgba(153, 153, 153, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px #ff7d64;
    border-radius: 4px;
    color: #ff7d64;
    margin-top: 25px;
    cursor: pointer;
    width: 100%;
    height: 38px;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 34px;
  position: relative;
  & h1 {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 70px;
    color: #000000;
  }
  & p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 41px;
    color: #000000;
    margin-top: 23px;
  }
  & img {
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
  }
`;

export const FieldWrapper = styled.div`
  width: 100%;
  margin-top: 23px;
  & span {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
  & span:nth-child(n + 2) {
    margin-left: 5px;
  }
`;

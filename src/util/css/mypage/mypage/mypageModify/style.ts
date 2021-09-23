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

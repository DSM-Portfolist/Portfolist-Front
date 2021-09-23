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
    margin-top: 15px;
  }
  & img::after {
    content: "이미지";
  }
  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 100%;
    cursor: pointer;
    height: 40px;
    background: #ff7d64;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(153, 153, 153, 0.25);
    font-family: "Noto Sans KR";
    font-style: 500;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
  }
`;

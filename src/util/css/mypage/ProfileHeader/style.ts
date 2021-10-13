import { css } from "@emotion/react";

export const profileHeader = css`
  width: 100%;
  height: 177px;
  border-bottom: 2px solid #e7e7e7;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const profileImage = css`
  width: 150px;
  height: 150px;
  border: 1px solid #cccccc;
  border-radius: 100%;
  background-size: cover;
  object-fit: cover;
`;

export const profileWrapper = css`
  width: 100%;
  margin: 0 0 10px 50px;
  & h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 70px;
  }
  & #introduce {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 41px;
  }
`;

export const profileBottom = css`
  margin-top: 13px;
  width: 100%;
  position: relative;
  align-items: center;
  & h3 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    margin-right: 5px;
  }
  & p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    margin-right: 15px;
  }
  & a {
    width: 120px;
    height: 30px;
  }
  & button {
    width: 120px;
    height: 30px;
    background: #ff7d64;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(153, 153, 153, 0.25);
    color: white;
    position: absolute;
    right: 0;
    cursor: pointer;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
`;
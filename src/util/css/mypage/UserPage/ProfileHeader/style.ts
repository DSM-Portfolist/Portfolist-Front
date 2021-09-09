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
    margin-right: 24px;
  }
`;

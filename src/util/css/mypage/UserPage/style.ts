import { css } from "@emotion/react";

export const initA = css`
  text-decoration: none;
  outline: none;
  &:hover,
  a:active {
    text-decoration: none;
  }
`;

export const baseBackground = css`
  height: 200vh;
  overflow-x: hidden;
  align-items: center;
`;

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const column = css`
  display: flex;
  flex-direction: column;
`;

export const myPageSection = css`
  width: 750px;
  margin-top: 90px;
`;

export const portfolioList = css`
  & > a:nth-of-type(n + 2) > div {
    margin-top: 70px;
  }
`;

export const sectionTitleWrapper = css`
  width: 100%;
  height: 150px;
  & span {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-size: 24px;
    line-height: 35px;
  }
  & span:first-child {
    font-weight: bold;
  }
  & span:nth-of-type(2) {
    font-weight: 500;
  }
`;

export const portfolioItem = css`
  width: 100%;
  height: 630px;
  border-bottom: 2px solid #e7e7e7;
  img {
    width: 100%;
    height: 404px;
    background-size: cover;
    object-fit: cover;
  }
  h1 {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    margin-top: 28px;
    color: #000000;
  }
  #content {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #666666;
    margin-top: 10px;
  }
`;

export const FieldWrapper = css`
  margin-top: 12px;
  & div {
    display: inline-block;
    height: 30px;
    border: 1px solid #ff7659;
    border-radius: 20px;
    padding: 0 20px 0 20px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #ff7659;
  }
  & div:nth-of-type(n + 2) {
    margin-left: 10px;
  }
`;

export const portfolioItemUnderBar = css`
  width: 100%;
  height: 35;
  align-items: center;
  margin-top: 25px;
  justify-content: space-between;
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-size: cover;
    object-fit: cover;
    margin-right: 5px;
  }
  p:nth-of-type(2) {
    display: inline;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
  }
  div span {
    justify-self: flex-end;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #666666;
  }
  div span:nth-of-type(2) {
    margin-left: 10px;
  }
  div span:nth-of-type(3) {
    margin-left: 20px;
  }
`;

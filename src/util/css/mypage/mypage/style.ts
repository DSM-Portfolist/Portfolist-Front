import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface NavWrapperProps {
  isClickMyPortfolio: boolean;
}

export const baseBackground = css`
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

export const row = css`
  display: flex;
  flex-direction: row;
`;

export const sectionTitleWrapper = css`
  width: 100%;
  height: 150px;
`;

export const NavWrapper = styled.div<NavWrapperProps>`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    cursor: pointer;
    padding-bottom: 8px;
    transition: 0.3s;
  }

  h1:first-of-type {
    color: ${(props) => (props.isClickMyPortfolio ? "#ff7659" : "#000000")};
  }

  h1:nth-of-type(2) {
    margin-left: 50px;
    color: ${(props) => (props.isClickMyPortfolio ?  "#000000" : "#ff7659")};
  }
`;

export const myPageSection = css`
  width: 750px;
  margin-top: 130px;
`;

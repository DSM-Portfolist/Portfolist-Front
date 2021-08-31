import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const baseBackground = css`
  width: 100vw;
  height: 100vh;
`;

export const loginWrapper = css`
  width: 300px;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const inputWrapper = css`
  margin-top: 60px;

  & input {
    margin-bottom: 10px;
    font-size: 15px;
    width: 98%;
    height: 35px;
    padding: 1%;
    outline: none;
    border: none;
    border-bottom: 2px solid #c4c4c4;
  }
`;

interface buttonType {
  btnColor: boolean;
}

// styled-component button-color props
export const ButtonWrapper = styled.div`
  margin-top: 50px;

  & button {
    margin-bottom: 30px;
    color: white;
    font-weight: 500;
    font-size: 18px;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    filter: drop-shadow(0px 2px 7px rgba(119, 119, 119, 0.25));

    & span {
      margin-left: 10px;
    }
  }

  .login-button {
    background: ${({ btnColor }: buttonType) =>
      btnColor ? "#FF7659" : "#DADADA"};
  }
`;

export const gitButton = css`
  background-color: #4d4d4d;

  :hover {
    background-color: black;
  }
`;

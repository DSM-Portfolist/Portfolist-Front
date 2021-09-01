import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CloseEye } from "../../assets";

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const row = css`
  display: flex;
  flex-direction: row;
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

export const signUpWrapper = css`
  width: 500px;
  height: 600px;
  border: 1px solid red;
`;

export const inputItem = css`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0;

  & span {
    margin-right: 35px;
  }
`;

export const inputItemWrap = css`
  width: 65%;
  display: flex;
  flex-direction: column;
  position: relative;

  & p {
    font-size: 14px;
    color: #939393;
  }
`;

export const inputWrapper = css`
  margin-top: 60px;
  width: 80%;

  & input {
    margin-bottom: 5px;
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

export const NextButton = styled.button`
  cursor: pointer;
  margin-top: 70px;
  color: white;
  font-size: 18px;
  width: 300px;
  height: 40px;
  background: ${({ btnColor }: buttonType) =>
    btnColor ? "#FF7659" : "#DADADA"};
  box-shadow: 0px 2px 6px rgba(119, 119, 119, 0.25);
  border-radius: 5px;
`;

export const selectIcon = css`
  position: absolute;
  cursor: pointer;
  right: 0;
  bottom: 35px;
`;

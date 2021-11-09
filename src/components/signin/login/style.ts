import styled from "@emotion/styled";
import { buttonType } from "../../../util/interface/Sign/buttonType";

export const BackWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.form`
  width: 300px;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;

  & input {
    margin-bottom: 5px;
    font-size: 15px;
    width: 98%;
    height: 35px;
    padding: 1%;
    outline: none;
    border: none;
    transition: all 0.8s;
  }
`;

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

export const GitBtn = styled.button`
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
  background-color: #4d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: black;
  }
`;

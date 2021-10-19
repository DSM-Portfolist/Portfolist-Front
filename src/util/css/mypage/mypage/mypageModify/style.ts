import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ChangeProps {
  isClickPasswordButton: boolean;
}
interface modalProps {
  modal: boolean;
}
interface Props {
  modal: boolean;
}

export const MypageModifyContainer = styled.div<modalProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

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
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
  & span:first-child {
    font-weight: bold;
  }
  & span:nth-child(n + 2) {
    margin-left: 5px;
  }
`;

export const MainContentWrapper = styled.div`
  width: 770px;
  margin-top: 82px;
  display: flex;
  flex-direction: column;
`;

export const ContentItem = css`
  width: 100%;
  height: 120px;
  border-bottom: 2px solid #e7e7e7;
  transform: rotate(-0.08deg);
  position: relative;
  & h1 {
    margin-top: 15px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 35px;
  }
  & p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.45);
    margin-top: 25px;
  }
  & span {
    position: absolute;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    color: #ff7d64;
    top: 19px;
    right: 2px;
    cursor: pointer;
  }
`;

export const ChangePasswordWrraper = styled.form<ChangeProps>`
  width: 100%;
  height: ${(props) => (props.isClickPasswordButton ? "300px" : "0px")};
  display: flex;
  opacity: ${(props) => (props.isClickPasswordButton ? "1" : "0")};
  flex-direction: column;
  border-bottom: 2px solid #e7e7e7;
  transform: rotate(-0.08deg);
  transition: ${(props) => (props.isClickPasswordButton ? "0.5s" : "0.5s")};
`;

export const PasswordChangeWrapper = styled.div`
  & span {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #979797;
    margin: 5px 0 0 230px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 25px;
  & > * {
    cursor: pointer;
  }
  & button {
    width: 70px;
    height: 100%;
    box-shadow: 0px 4px 8px rgba(153, 153, 153, 0.25);
    background: #c5c5c5;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin-right: 18px;
  }
  & input {
    width: 70px;
    height: 100%;
    background: #ff7d64;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }
`;

export const ChangePasswordItem = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  align-items: center;
  position: relative;
  & h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 26px;
    color: #000000;
    width: 231px;
  }
  & input {
    width: 455px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
    padding-left: 12px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding-right: 50px;
  }
  & img {
    cursor: pointer;
    position: absolute;
    right: 91px;
  }
`;

export const ModalWrapper = styled.section<Props>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.37);
  position: fixed;
  z-index: 10;
  display: ${({ modal }) => (modal ? "flex" : "none")};
`;

export const ModalBox = styled.div`
  width: 400px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto auto auto auto;
  & h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    color: rgba(0, 0, 0);
    margin: 30px 0 7px 40px;
  }
  & p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.45);
    margin-left: 40px;
  }
  & p:nth-child(3) {
    margin-bottom: 30px;
  }
  .passwordInputWrapper {
    display: flex;
    width: 100%;
    height: 35px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 65px;
    input {
      width: 234px;
      height: 35px;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      box-sizing: border-box;
      border-radius: 5px;
    }
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #000000;
      margin-right: 23px;
    }
  }
`;

export const ModalButtonWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  & > * {
    cursor: pointer;
  }
  & button {
    width: 70px;
    height: 100%;
    box-shadow: 0px 4px 8px rgba(153, 153, 153, 0.25);
    background: #c5c5c5;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #ffffff;
    margin-right: 18px;
  }
  & input {
    width: 70px;
    height: 100%;
    background: #ff7d64;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #ffffff;
  }
`;

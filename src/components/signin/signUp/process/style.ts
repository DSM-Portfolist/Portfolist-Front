import styled from "@emotion/styled";
import { loginTextColor, mainColor } from "../../../../util/css/color/color";
import { buttonType } from "../../../../util/interface/Sign/buttonType";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignForm = styled.form`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FieldSelectWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;

  span {
    color: ${loginTextColor};
    font-size: 18px;
  }

  .categoy_wrap {
    margin-left: 5%;
    width: 60%;

    p {
      border-bottom: 2px solid ${mainColor};
      padding-bottom: 2px;
      width: 100%;
    }
  }
`;

export const SignBox = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  button {
    width: 50%;
    height: 40px;
    margin: 0 auto;
    box-shadow: 0px 2px 6px rgba(119, 119, 119, 0.25);
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 18px;
    background: ${({ btnColor }: buttonType) =>
      btnColor ? "#FF7659" : "#DADADA"};
  }

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

export const ArrowImg = styled.img`
  width: 15px;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.5s;
`;

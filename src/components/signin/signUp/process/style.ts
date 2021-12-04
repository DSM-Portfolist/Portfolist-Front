import styled from "@emotion/styled";
import { loginTextColor, mainColor } from "../../../../util/css/color/color";
import { buttonType } from "../../../../util/interface/Sign/buttonType";

interface Props {
  btnColor?: boolean;
  nextLevel?: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignSlider = styled.div<Props>`
  width: 200%;
  display: flex;
  justify-content: space-between;
  transform: ${({ nextLevel }: any) =>
    nextLevel ? "translateX(-54%)" : "translateX(0)"};
  transition: transform 1s ease-in 0s;
`;

export const SignForm = styled.form`
  width: 580px;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  a {
    width: 130px;
    margin: 0 auto;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;
export const FieldSelectWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px auto;

  span {
    color: ${loginTextColor};
    font-size: 18px;
  }
`;

export const SignBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
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

  .sub-title {
    margin: 30px 0;
  }
`;

export const ArrowImg = styled.img`
  width: 15px;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.5s;
`;

export const ProgressWrapper = styled.div`
  margin: 40px auto;
  width: 400px;
  height: 5px;
  background: #f0f0f0;
`;

export const ProgressBar = styled.div<Props>`
  width: ${({ nextLevel }: any) => (nextLevel ? "100%" : "50%")};
  height: 5px;
  background: #ff7659;
  transition: 0.6s ease-in 0s;
`;

export const InputWrapper = styled.div`
  width: 40%;
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
    border-bottom: 2px solid #c4c4c4;
  }
`;

export const InputItem = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & span {
    margin-right: 35px;
  }

  .email-button {
    position: absolute;
    right: 588px;
    top: 96px;
    cursor: pointer;
    color: white;
    padding: 10px;
    background: #dadada;
    box-shadow: 0px 2px 6px rgb(119 119 119 / 25%);
    border-radius: 5px;
    transition: all 0.5s;
  }
`;

export const NextButton = styled.button<Props>`
  margin: 50px auto;
  cursor: pointer;
  color: white;
  font-size: 18px;
  width: 300px;
  height: 40px;
  background: ${({ btnColor }) => (btnColor ? "#FF7659" : "#DADADA")};
  box-shadow: 0px 2px 6px rgba(119, 119, 119, 0.25);
  border-radius: 5px;
  transition: all 0.3s;
  padding: 10px;
`;

export const InputItemWrap = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    font-family: "Noto Sans KR";
    transition: all 0.5s;
    color: black;
  }

  & p {
    font-size: 12px;
    color: #939393;
  }

  .select-icon {
    position: absolute;
    cursor: pointer;
    right: 0;
    bottom: 35px;
  }
`;

export const PreButton = styled(NextButton)`
  width: 40%;
  background-color: #dadada;
`;

export const CategoryItemWrap = styled.select`
  width: 72%;
  margin-left: 50px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background: #ffffff;
  border-bottom: 2px solid ${mainColor};
  box-sizing: border-box;
  transition: all 0.5s;
  font-size: 16px;
  text-align: center;

  option {
    height: fit-content;
    font-size: 16px;
    border: 1px solid #eaeaea;
    text-align: center;
    padding: 3px;
    cursor: pointer;
    box-shadow: 0px 2px 3px rgba(163, 163, 163, 0.25);

    :hover {
      background: ${mainColor};
    }
  }
`;

export const FieldListWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FieldItemWrapper = styled.div`
  margin: 10px;
  width: fit-content;
  background: #ff7659;
  border-radius: 20px;
  padding: 8px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font-size: 15px;
    color: white;
  }

  img {
    margin: 0 0 0 10px;
    cursor: pointer;
  }
`;

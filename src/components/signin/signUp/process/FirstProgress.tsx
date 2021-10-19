/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastError } from "../../../../hook/toastHook";
import { CloseEye, Logo, OpenEye, Warning } from "../../../../util/assets";
import { mainColor } from "../../../../util/css/color/color";
import { SignUpType } from "../../../../util/interface/Sign/loginType";
import ProgressBar from "./ProgressBar";
import SecProgress from "./SecProgress";
import * as S from "./style";

interface Props {
  setInputs: any;
  inputs: SignUpType;
}

const FirstProgress = ({ setInputs, inputs }: Props) => {
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [nextLevel, setNextLevel] = useState<boolean>(false);
  const [inputType, setInputType] = useState<boolean>(false);
  const [inputTypeReturn, setInputTypeReturn] = useState<boolean>(false);
  let error = false;

  const { name, email, password, field } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(value);

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (inputs: SignUpType) => {
    console.log(inputs);

    /*     setInputs({
      name: "",
      email: "",
      password: "",
      field: "",
    }); */
  };

  useEffect(() => {
    inputs.name.length >= 2 &&
    inputs.email.length >= 5 &&
    inputs.password.length >= 4
      ? setBtnColor(true)
      : setBtnColor(false);
  }, [inputs.name.length, inputs.email.length, inputs.password.length]);

  return (
    <>
      <ToastContainer />
      <S.SignForm>
        <img src={Logo} className="logo" alt="Portfolist 로고" />
        <ProgressBar />
        <S.SignSlider btnColor={btnColor} nextLevel={nextLevel}>
          <S.InputWrapper>
            <S.InputItem>
              <span>이름</span>
              <S.InputItemWrap>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  placeholder="사용하실 이름을 입력해주세요"
                  style={
                    inputs.name.length >= 2
                      ? { borderBottom: `2px solid ${mainColor}` }
                      : { borderBottom: "" }
                  }
                />
              </S.InputItemWrap>
            </S.InputItem>
            <S.InputItem>
              <span>이메일</span>
              <S.InputItemWrap>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  placeholder="이메일을 입력해주세요"
                  style={
                    inputs.email.length >= 5
                      ? { borderBottom: `2px solid ${mainColor}` }
                      : { borderBottom: "" }
                  }
                />
                <p>이메일 형식을 맞춰주세요.</p>
              </S.InputItemWrap>
            </S.InputItem>
            <S.InputItem>
              <span>비밀번호</span>
              <S.InputItemWrap>
                <input
                  type={inputType ? "password" : "text"}
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  placeholder="사용하실 비밀번호를 입력해주세요"
                  style={
                    inputs.password.length >= 4
                      ? { borderBottom: `2px solid ${mainColor}` }
                      : { borderBottom: "" }
                  }
                />
                <p>4글자 이상 입력해주세요.</p>
                <img
                  src={inputType ? CloseEye : OpenEye}
                  className="select-icon"
                  alt="비밀번호아이콘"
                  onClick={() => setInputType(!inputType)}
                />
                {error ? (
                  <></>
                ) : (
                  <img
                    className="select-icon"
                    src={Warning}
                    alt="비밀번호 경고 아이콘"
                  />
                )}
              </S.InputItemWrap>
            </S.InputItem>
            <S.InputItem>
              <span>비밀번호 확인</span>
              <S.InputItemWrap>
                <input
                  type={inputTypeReturn ? "password" : "text"}
                  placeholder="비밀번호를 다시입력해주세요"
                />
                <p>4글자 이상 입력해주세요.</p>
                <img
                  src={inputTypeReturn ? CloseEye : OpenEye}
                  className="select-icon"
                  alt="비밀번호아이콘"
                  onClick={() => setInputTypeReturn(!inputTypeReturn)}
                />
              </S.InputItemWrap>
            </S.InputItem>
          </S.InputWrapper>
          <SecProgress />
        </S.SignSlider>
        <S.NextButton
          btnColor={btnColor}
          onClick={() => {
            setNextLevel(btnColor);
            handleSubmit(inputs);
          }}
        >
          다음
        </S.NextButton>
      </S.SignForm>
    </>
  );
};

export default FirstProgress;

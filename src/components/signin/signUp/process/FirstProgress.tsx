import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MAINURL } from "../../../../util/api";
import { CloseEye, Logo, OpenEye, Warning } from "../../../../util/assets";
import { mainColor } from "../../../../util/css/color/color";
import { SignUpType } from "../../../../util/interface/Sign/loginType";
import ProgressBar from "./ProgressBar";
import SecProgress from "./SecProgress";
import * as S from "./style";

interface Props {
  setInputs: any;
  inputs: SignUpType;
  setFieldList: any;
  fieldList: any;
}

const FirstProgress = ({
  setInputs,
  inputs,
  fieldList,
  setFieldList,
}: Props) => {
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [nextLevel, setNextLevel] = useState<boolean>(false);
  const [inputType, setInputType] = useState<boolean>(false);
  const [inputTypeReturn, setInputTypeReturn] = useState<boolean>(false);
  let error = false;

  const { name, email, password, field } = inputs;

  // 이메일 인증 API
  const emailAccess = useMutation((email) =>
    axios.post(`${MAINURL}/email`, { email: email })
  );

  const EmailAccessHandler = (email: any) => {
    emailAccess.mutate(email);
  };

  // 회원가입 API
  const signUp = useMutation((inputs) => axios.post(`${MAINURL}/join`, inputs));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
      field: fieldList,
    });
  };

  const handleSubmit = (data: any, e: any) => {
    e.preventDefault();

    signUp.mutate(data);
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

              <div
                className="email-button"
                onClick={() => EmailAccessHandler(email)}
                style={
                  inputs.email.length >= 4
                    ? { backgroundColor: `${mainColor}` }
                    : { backgroundColor: "" }
                }
              >
                이메일 인증
              </div>
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
                <p>4글자 이상 12글자 이하로 입력해주세요.</p>
                <img
                  src={inputType ? OpenEye : CloseEye}
                  className="select-icon"
                  alt="비밀번호아이콘"
                  onClick={() => setInputType(!inputType)}
                />
                {error ? (
                  <></>
                ) : (
                  <>
                    {/* <img
                    className="select-icon"
                    src={Warning}
                    alt="비밀번호 경고 아이콘"
                  /> */}
                  </>
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
                <img
                  src={inputTypeReturn ? OpenEye : CloseEye}
                  className="select-icon"
                  alt="비밀번호아이콘"
                  onClick={() => setInputTypeReturn(!inputTypeReturn)}
                />
              </S.InputItemWrap>
            </S.InputItem>
          </S.InputWrapper>
          <SecProgress
            onChange={onChange}
            field={field}
            setFieldList={setFieldList}
            fieldList={fieldList}
          />
        </S.SignSlider>
        {nextLevel ? (
          <div className="button-wrapper">
            <S.PreButton
              btnColor={btnColor}
              onClick={() => {
                setNextLevel(false);
              }}
            >
              이전
            </S.PreButton>
            <S.PreButton
              btnColor={btnColor}
              onClick={(e) => {
                handleSubmit(inputs, e);
              }}
            >
              회원가입
            </S.PreButton>
          </div>
        ) : (
          <>
            <S.NextButton
              btnColor={btnColor}
              onClick={() => {
                setNextLevel(btnColor);
              }}
            >
              다음
            </S.NextButton>
          </>
        )}
      </S.SignForm>
    </>
  );
};

export default FirstProgress;

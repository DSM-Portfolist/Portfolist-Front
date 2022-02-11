import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastError, ToastSuccess } from "../../../../hook/toastHook";
import { MAINURL } from "../../../../util/api/common";
import { CloseEye, Logo, OpenEye } from "../../../../util/assets";
import { mainColor } from "../../../../util/css/color/color";
import { SignUpType } from "../../../../util/interface/Sign/loginType";
import { SecProgress, ProgressBar } from "../../../index";
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
  const { push } = useHistory();
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [nextLevel, setNextLevel] = useState<boolean>(false);
  const [inputType, setInputType] = useState<boolean>(false);
  const [inputTypeReturn, setInputTypeReturn] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  let error = false;

  const { name, email, password, field } = inputs;

  // 이메일 인증 API
  const { mutate: emailAccess } = useMutation(
    () => axios.post(`${MAINURL}/email`, { email: email }),
    {
      onSuccess: () => {
        ToastSuccess("이메일 요청에 성공했습니다.");
      },
      onError: () => {
        ToastError("이메일 요청에 실패하였습니다.");
      },
    }
  );

  // 회원가입 API
  const { mutate: signUp } = useMutation(
    () => axios.post(`${MAINURL}/join`, inputs),
    {
      onSuccess: () => {
        ToastSuccess("회원가입이 완료되었습니다.");
        setTimeout(() => {
          push("/login");
        }, 1000);
      },
      onError: (e) => {
        if (e === 404) {
          ToastError("이메일 인증을 다시해주세요.");
        } else {
          ToastError("회훤가입을 다시 시도해주세요");
        }
      },
    }
  );

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

    signUp(data);
  };

  useEffect(() => {
    inputs.name.length >= 2 &&
    inputs.email.length >= 5 &&
    inputs.password.length >= 4 &&
    passwordCheck === inputs.password
      ? setBtnColor(true)
      : setBtnColor(false);
  }, [inputs, passwordCheck]);

  return (
    <>
      <ToastContainer />
      <S.SignForm>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <ProgressBar nextLevel={nextLevel} />
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
                    inputs.email.length >= 4 && inputs.email.includes("@")
                      ? { borderBottom: `2px solid ${mainColor}` }
                      : { borderBottom: "" }
                  }
                />
                <p>이메일 형식을 맞춰주세요.</p>
              </S.InputItemWrap>

              <div
                className="email-button"
                onClick={() => emailAccess()}
                style={
                  inputs.email.length >= 4 && inputs.email.includes("@")
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
                  type={inputType ? "text" : "password"}
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
                  name="passwordCheck"
                  value={passwordCheck}
                  type={inputTypeReturn ? "text" : "password"}
                  placeholder="비밀번호를 다시입력해주세요"
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  style={
                    passwordCheck.length >= 4
                      ? { borderBottom: `2px solid ${mainColor}` }
                      : { borderBottom: "" }
                  }
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
              style={{
                background: `${mainColor}`,
              }}
              onClick={(e) => handleSubmit(inputs, e)}
            >
              회원가입
            </S.PreButton>
          </div>
        ) : (
          <>
            <S.NextButton
              btnColor={btnColor}
              onClick={(e) => {
                e.preventDefault();
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

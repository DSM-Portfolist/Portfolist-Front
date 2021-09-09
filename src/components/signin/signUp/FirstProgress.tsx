/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useHistory } from "react-router";
import { CloseEye, Logo, OpenEye, Warning } from "../../../util/assets";
import {
  inputItem,
  inputItemWrap,
  inputWrapper,
  loginWrapper,
  NextButton,
  row,
  selectIcon,
  signUpWrapper,
} from "../../../util/css/signin/LoginEmotion";
import ProgressBar from "./ProgressBar";

const FirstProgress = () => {
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [inputType, setInputType] = useState<boolean>(false);
  const [inputTypeReturn, setInputTypeReturn] = useState<boolean>(false);

  let error = false;

  const history = useHistory();

  return (
    <form css={[loginWrapper, signUpWrapper]}>
      <img src={Logo} alt="Portfolist 로고" />
      <ProgressBar />
      <div css={[inputWrapper]}>
        <div css={[row, inputItem]}>
          <span>이름</span>
          <div css={[inputItemWrap]}>
            <input type="text" placeholder="사용하실 이름을 입력해주세요" />
          </div>
        </div>
        <div css={[row, inputItem]}>
          <span>이메일</span>
          <div css={[inputItemWrap]}>
            <input type="text" placeholder="이메일을 입력해주세요" />
            <p>이메일 형식을 맞춰주세요.</p>
          </div>
        </div>
        <div css={[row, inputItem]}>
          <span>비밀번호</span>
          <div css={[inputItemWrap]}>
            <input
              type={inputType ? "password" : "text"}
              placeholder="비밀번호를 입력해주세요"
            />
            <p>4글자 이상 입력해주세요.</p>
            <img
              src={inputType ? CloseEye : OpenEye}
              css={[selectIcon]}
              alt="비밀번호아이콘"
              onClick={() => setInputType(!inputType)}
            />
            {error ? (
              <></>
            ) : (
              <img
                css={[selectIcon]}
                src={Warning}
                alt="비밀번호 경고 아이콘"
              />
            )}
          </div>
        </div>
        <div css={[row, inputItem]}>
          <span>비밀번호 확인</span>
          <div css={[inputItemWrap]}>
            <input
              type={inputTypeReturn ? "password" : "text"}
              placeholder="비밀번호를 다시입력해주세요"
            />
            <p>4글자 이상 입력해주세요.</p>
            <img
              src={inputTypeReturn ? CloseEye : OpenEye}
              css={[selectIcon]}
              alt="비밀번호아이콘"
              onClick={() => setInputTypeReturn(!inputTypeReturn)}
            />
          </div>
        </div>
      </div>
      <NextButton
        btnColor={btnColor}
        onClick={() => history.push("/sign-up/sec")}
      >
        다음
      </NextButton>
    </form>
  );
};

export default FirstProgress;

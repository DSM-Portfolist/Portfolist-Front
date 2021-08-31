/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { Logo } from "../../../util/assets";
import {
  baseBackground,
  ButtonWrapper,
  center,
  inputItem,
  inputWrapper,
  loginWrapper,
  NextButton,
  row,
  signUpWrapper,
} from "../../../util/css/signin/style";
import ProgressBar from "./ProgressBar";

const SignUp = () => {
  const [btnColor, setBtnColor] = useState<boolean>(false);

  return (
    <section css={[baseBackground, center]}>
      <form css={[loginWrapper, signUpWrapper]}>
        <img src={Logo} alt="Portfolist 로고" />
        <ProgressBar />
        <div css={[inputWrapper]}>
          <div css={[row, inputItem]}>
            <span>이름</span>
            <input type="text" placeholder="사용하실 이름을 입력해주세요" />
          </div>
          <div css={[row, inputItem]}>
            <span>이메일</span>
            <input type="text" placeholder="사용하실 이메일을 입력해주세요" />
          </div>
          <div css={[row, inputItem]}>
            <span>비밀번호</span>
            <input type="text" placeholder="사용하실 이름을 입력해주세요" />
          </div>
          <div css={[row, inputItem]}>
            <span>비밀번호 확인</span>
            <input type="text" placeholder="사용하실 이메일을 입력해주세요" />
          </div>
        </div>
        <NextButton>
          <button>다음</button>
        </NextButton>
      </form>
    </section>
  );
};

export default SignUp;

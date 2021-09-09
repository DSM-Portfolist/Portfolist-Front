/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Logo } from "../../../util/assets";
import {
  baseBackground,
  ButtonWrapper,
  center,
  gitButton,
  inputWrapper,
  loginWrapper,
} from "../../../util/css/signin/LoginEmotion";

const Login = () => {
  const [buttonColor, setButtonColor] = useState<boolean>(false);

  return (
    <section css={[baseBackground, center]}>
      <form css={[loginWrapper]}>
        <img src={Logo} alt="Portfolist 로고" />
        <div css={[inputWrapper]}>
          <input type="text" placeholder="이메일을 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <ButtonWrapper btnColor={buttonColor}>
          <button className="login-button">login</button>
          <button css={[center, gitButton]}>
            <img src={Github} alt="깃허브 로고"></img>
            <span>Github 로그인</span>
          </button>
        </ButtonWrapper>
        <Link
          to="/sign-up"
          css={css`
            color: #8b8b8b;
          `}
        >
          아직 계정이 없으신가요?
        </Link>
      </form>
    </section>
  );
};

export default Login;

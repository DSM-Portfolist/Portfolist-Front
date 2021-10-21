/** @jsxImportSource @emotion/react */

import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastError, ToastSuccess } from "../../../hook/toastHook";
import { MAINURL } from "../../../util/api";
import { Github, Logo } from "../../../util/assets";
import { mainColor } from "../../../util/css/color/color";
import * as S from "./style";

interface LoginType {
  email: string;
  password: string;
}

const Login = () => {
  const [buttonColor, setButtonColor] = useState<boolean>(false);
  const [emailBor, setEmailBor] = useState<boolean>(false);
  const [passwordBor, setPasswordBor] = useState<boolean>(false);
  const [loginInput, setLoginInput] = useState<LoginType>({
    email: "",
    password: "",
  });

  const history = useHistory();

  const { email, password } = loginInput;

  const loginNormal = useMutation("post", () =>
    axios.post(`${MAINURL}/login/normal`, { email: email })
  );

  useEffect(() => {
    email.length >= 4 ? setEmailBor(true) : setEmailBor(false);
    password.length >= 4 ? setPasswordBor(true) : setPasswordBor(false);
    email && password ? setButtonColor(true) : setButtonColor(false);
  }, [email, password]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };

  const onSubmit = (e: any, data: any) => {
    e.preventDefault();

    loginNormal.mutate(data);
    console.log(loginNormal.status);

    loginNormal.status === "error"
      ? ToastError("이메일 혹은 비밀번호가 틀렸습니다.")
      : loginNormal.status === "idle"
      ? ToastError("이메일 혹은 비밀번호가 틀렸습니다.")
      : ToastSuccess("로그인이 되었습니다.");

    /* if (email && password) {
      ToastSuccess("로그인에 성공하셨습니다.");
      setTimeout(() => {
        history.push("/");
      }, 1500);
    } else {
      ToastError("정보를 다시 입력해주세요");
    } */
  };

  return (
    <S.BackWrapper>
      <ToastContainer />
      <S.Content onSubmit={(e) => onSubmit(e, loginNormal)}>
        <Link to="/">
          <img src={Logo} alt="Portfolist 로고" />
        </Link>

        <S.InputWrapper>
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            name="email"
            value={email}
            onChange={onChange}
            style={{
              borderBottom: emailBor
                ? `2px solid ${mainColor}`
                : `2px solid #c4c4c4`,
            }}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            value={password}
            onChange={onChange}
            style={{
              borderBottom: passwordBor
                ? `2px solid ${mainColor}`
                : `2px solid #c4c4c4`,
            }}
          />
        </S.InputWrapper>
        <S.ButtonWrapper btnColor={buttonColor}>
          <button className="login-button">login</button>
          <S.GitBtn>
            <img src={Github} alt="깃허브 로고"></img>
            <span>Github 로그인</span>
          </S.GitBtn>
        </S.ButtonWrapper>
        <Link to="/sign-up">아직 계정이 없으신가요?</Link>
      </S.Content>
    </S.BackWrapper>
  );
};

export default Login;

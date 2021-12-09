import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../../util/assets";
import * as S from "./style";

const EmailAuthFail = () => {
  return (
    <S.Wrapper>
      <S.EmailModal>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="text_wrp">
          <span>이메일 인증에 실패했습니다.</span>
          <span>이메일 인증을 다시 해주세요.</span>
        </div>
      </S.EmailModal>
    </S.Wrapper>
  );
};

export default EmailAuthFail;

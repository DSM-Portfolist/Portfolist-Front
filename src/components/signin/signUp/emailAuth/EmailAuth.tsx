import { Link } from "react-router-dom";
import { Logo } from "../../../../util/assets";
import * as S from "./style";

const EmailAuth = () => {
  return (
    <S.Wrapper>
      <S.EmailModal>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="text_wrp">
          <span>이메일 인증에 성공했습니다.</span>
          <span>회원가입을 완성해주세요.</span>
        </div>
      </S.EmailModal>
    </S.Wrapper>
  );
};

export default EmailAuth;

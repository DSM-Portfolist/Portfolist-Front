import React from "react";
import { useRecoilState } from "recoil";
import { commentReoprt } from "../../../modules/atom/portfolio/comment";
import { Logo } from "../../../util/assets";
import * as S from "./style";

const Report = () => {
  const [madal, setModal] = useRecoilState(commentReoprt);

  return (
    <S.Wrapper madal={madal}>
      <S.ReportModal>
        <img src={Logo} alt="" />
        <div className="input_wrapper">
          <input type="text" placeholder="이메일을 입력해주세요" />
          <textarea placeholder="신고 사유를 적어주세요" />
        </div>
        <button onClick={() => setModal(false)}>신고하기</button>
      </S.ReportModal>
    </S.Wrapper>
  );
};

export default Report;

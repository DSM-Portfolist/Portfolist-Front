import React from "react";
import { FooterGithub, FooterLogo } from "../../../util/assets";
import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterWrap>
      <div className="logo">
        <img src={FooterLogo} alt="로고" />
        <span>포트폴리스트는 여러분을 응원합니다.</span>
        <span>© portfolist</span>
      </div>
      <div className="developer-container">
        <div className="icon">
          <img src={FooterGithub} alt="깃허브아이콘" />
        </div>
        <ul>
          <li>FRONTEND</li>
          <li>강은빈</li>
          <li>김재현</li>
        </ul>
        <ul>
          <li>SERVER</li>
          <li>고도현</li>
          <li>곽도현</li>
        </ul>
      </div>
    </S.FooterWrap>
  );
};

export default Footer;

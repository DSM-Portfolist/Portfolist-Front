import React from "react";
import { Logo, NoNotification, Profile } from "../../../util/assets";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Container>
        <img src={Logo} alt="포트폴리스트 로고" />
        <ul>
          <li>portfolio 구경</li>
          <li>portfolio 제작</li>
        </ul>
        <ul>
          <li>
            <img src={NoNotification} alt="알림아이콘" />
          </li>
          <li>강은빈님</li>
          <li>
            <img src={Profile} alt="프로필 사진" />
          </li>
        </ul>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastSuccess } from "../../../hook/toastHook";
import {
  Logo,
  NoNotification,
  Notification,
  Profile,
} from "../../../util/assets";
import * as S from "./style";

const Header = () => {
  const [notification, setNotification] = useState<boolean>(false);
  const [moreItem, setMoreItem] = useState<boolean>(false);
  const test = true;

  return (
    <S.HeaderWrapper>
      {test ? (
        <>
          <S.Container>
            <img src={Logo} alt="포트폴리스트 로고" />
            <ul>
              <li className="list-item">
                <span>portfolio list</span> 열람
              </li>
              <li className="list-item">
                <span>portfolio make</span> 제작
              </li>
            </ul>
            <ul>
              <S.NotiWrapper>
                <img
                  src={test ? `${NoNotification}` : `${Notification}`}
                  alt="알림아이콘"
                  onClick={() => setNotification(!notification)}
                />
                <S.Notification
                  notification={notification}
                  style={notification ? { height: 200 } : { height: 0 }}
                ></S.Notification>
              </S.NotiWrapper>
              <li>반갑습니다. 강은빈님!</li>
              <S.NotiWrapper>
                <img
                  className="profile-img"
                  src={Profile}
                  alt="프로필 사진"
                  onMouseUp={() => setMoreItem(!moreItem)}
                />
                <S.MoreItem style={moreItem ? { height: 120 } : { height: 0 }}>
                  <li>마이페이지</li>
                  <li onClick={() => ToastSuccess("로그아웃 되었습니다.")}>
                    로그아웃
                  </li>
                </S.MoreItem>
              </S.NotiWrapper>
            </ul>
          </S.Container>
        </>
      ) : (
        <>
          <S.BeforeLoginHeader>
            <img src={Logo} alt="포트폴리스트 로고" />
            <Link to="/login">
              <button>시작하기</button>
            </Link>
          </S.BeforeLoginHeader>
          ;
        </>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;

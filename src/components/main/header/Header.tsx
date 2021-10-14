import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastSuccess } from "../../../hook/toastHook";
import {
  Logo,
  Magnifier,
  NoNotification,
  Notification,
  Profile,
} from "../../../util/assets";
import * as S from "./style";

const Header = () => {
  const [notification, setNotification] = useState<boolean>(false);
  const [magnifier, setMagnifier] = useState<boolean>(false);
  const [moreItem, setMoreItem] = useState<boolean>(false);
  const test = true;

  return (
    <>
      <S.HeaderWrapper>
        {test ? (
          <>
            <S.Container>
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="포트폴리스트 로고" />
                </Link>
                <Link to="/portfolio-list" className="list-item">
                  <span>포트폴리오</span>
                </Link>
                <Link to="/portfolio-make" className="list-item">
                  <span>포트폴리오 제작</span>
                </Link>
              </div>
              <ul>
                <li>
                  <img
                    className="magnifier-img"
                    src={Magnifier}
                    alt="검색 아이콘"
                    onClick={() => setMagnifier(!magnifier)}
                  />
                </li>
                <S.NotiWrapper>
                  <img
                    className="noti-img"
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
                  <S.MoreItem
                    style={moreItem ? { height: 120 } : { height: 0 }}
                  >
                    <Link to="/my-page">마이페이지</Link>
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
      <S.MagnifierWrapper magnifier={magnifier}>
        <S.Input>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <img src={Magnifier} alt="검색 아이콘" />
        </S.Input>
      </S.MagnifierWrapper>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { ToastSuccess } from "../../../hook/toastHook";
import { subMenu } from "../../../modules/atom/header";
import { userInfoSelector } from "../../../modules/selector/user";
import { Profile } from "../../../util/assets";
import * as S from "./style";

const SubMenu = () => {
  // const userInfo = useRecoilValue(userInfoSelector);
  const [moreItem, setMoreItem] = useRecoilState(subMenu);

  return (
    <>
      {/*  <li>반갑습니다. {userInfo.name}님!</li> */}
      <S.NotiWrapper>
        <img
          className="profile-img"
          src={Profile}
          alt="프로필 사진"
          onMouseUp={() => setMoreItem(!moreItem)}
        />
        <S.MoreItem style={moreItem ? { height: 120 } : { height: 0 }}>
          <Link to="/my-page">내 프로필</Link>
          <li onClick={() => ToastSuccess("로그아웃 되었습니다.")}>로그아웃</li>
        </S.MoreItem>
      </S.NotiWrapper>
    </>
  );
};

export default SubMenu;

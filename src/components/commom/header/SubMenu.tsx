import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { ToastSuccess } from "../../../hook/toastHook";
import { subMenu } from "../../../modules/atom/header";
import { myInfoSelector } from "../../../modules/selector/user";
import { token } from "../../../util/api";
import { Profile } from "../../../util/assets";
import * as S from "./style";

const SubMenu = () => {
  const userInfo = useRecoilValue(myInfoSelector);
  const [moreItem, setMoreItem] = useRecoilState(subMenu);

  const history = useHistory();

  return (
    <>
      {token && (
        <>
          <li>반갑습니다. {userInfo.name}님!</li>
          <S.NotiWrapper>
            <img
              className="profile-img"
              src={Profile}
              alt="프로필 사진"
              onMouseUp={() => setMoreItem(!moreItem)}
            />
            <S.MoreItem style={moreItem ? { height: 120 } : { height: 0 }}>
              <Link to="/my-page">내 프로필</Link>
              <li
                onClick={() => {
                  history.push("/");
                  ToastSuccess("로그아웃 되었습니다.");
                  localStorage.removeItem("access_token_portfolist");
                  localStorage.removeItem("refresh_token_portfolist");
                }}
              >
                로그아웃
              </li>
            </S.MoreItem>
          </S.NotiWrapper>
        </>
      )}
    </>
  );
};

export default SubMenu;

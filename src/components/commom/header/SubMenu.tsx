import React, { useLayoutEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { GithubUser } from "../../../hook/githubUser";
import { ProfileImage } from "../../../hook/profileImg";
import { ToastSuccess } from "../../../hook/toastHook";
import { subMenu } from "../../../modules/atom/header";
import { getUser } from "../../../util/api/user/info";
import { DefaultProfile } from "../../../util/assets";
import { UserInfoType } from "../../../util/interface/user";
import { NotiWrapper } from "./notification/style";
import * as S from "./style";

const SubMenu = () => {
  const { push } = useHistory();
  const [moreItem, setMoreItem] = useRecoilState(subMenu);
  const [data, setData] = useState<UserInfoType>();

  const getMyProfile = async () => {
    try {
      const data = await getUser();
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useLayoutEffect(() => {
    getMyProfile();
  }, [moreItem]);

  return (
    <>
      <NotiWrapper style={{ display: "none" }}> {/* 버그로 인한 잠시 display none */}
        <img
          className="profile-img"
          src={
            data?.profile_img === null ? `${DefaultProfile}` : data?.profile_img
          }
          alt="프로필 사진"
          onMouseOver={() => setMoreItem(true)}
          onMouseOut={() => setMoreItem(false)}
        />
        <S.MoreItem
          style={moreItem ? { display: "flex" } : { display: "flex" }}
          onMouseOver={() => setMoreItem(true)}
          onMouseOut={() => setMoreItem(false)}
        >
          <Link to="/my-page">내 프로필</Link>
          <li
            onClick={() => {
              push("/");
              ToastSuccess("로그아웃 되었습니다.");
              localStorage.removeItem("access_token_portfolist");
              localStorage.removeItem("refresh_token_portfolist");
            }}
          >
            로그아웃
          </li>
        </S.MoreItem>
      </NotiWrapper>
    </>
  );
};

export default SubMenu;

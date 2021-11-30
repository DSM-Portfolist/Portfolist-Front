/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect } from "react";
import { column } from "../../../util/css/mypage/UserPage/style";
import { Link } from "react-router-dom";
import { row } from "../../../util/css/signin/style";
import * as S from "./style";
import {
  profileBottom,
  profileHeader,
  profileImage,
  profileWrapper,
} from "../../../util/css/mypage/ProfileHeader/style";
import { center } from "../../../util/css/mypage/mypage/style";
import { useRecoilState } from "recoil";
import { userInfoValue } from "../../../modules/selector/user";
import { getUser } from "../../../util/api/user/info";
import { token } from "../../../util/api";

const ProfileHeader = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoValue);
  const baseProfileImage =
    "https://www.ibossedu.co.kr/template/DESIGN_shared/program/theme/01/THUMBNAIL_60_60_icon_rep_box.gif";

  const getUserInfo = useCallback(() => {
    getUser().then((res) => setUserInfo(res.data));
  }, [setUserInfo]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <header css={profileHeader}>
      <img
        css={profileImage}
        alt="프로필 사진"
        src={
          userInfo?.profile_img === null
            ? `${baseProfileImage}`
            : userInfo?.profile_img
        }
      />
      <div css={[column, profileWrapper]}>
        <h1>{userInfo?.name}</h1>
        {userInfo?.introduce === null ? (
          <p id="introduce">아직 소개가 없어요</p>
        ) : (
          <p id="introduce">{userInfo?.introduce}</p>
        )}

        <div css={[row, profileBottom]}>
          <h3>분야</h3>
          {userInfo?.field === null ? (
            <>선택된 분야가 없습니다.</>
          ) : (
            <>
              {userInfo?.field?.map((field) => (
                <S.FieldItem>{field}</S.FieldItem>
              ))}
            </>
          )}

          {token && (
            <Link to="/my-page-modify">
              <button css={[center]}>프로필 수정</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;

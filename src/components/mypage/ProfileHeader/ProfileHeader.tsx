/** @jsxImportSource @emotion/react */
import React from "react";
import { column } from "../../../util/css/mypage/UserPage/style";
import { Link } from "react-router-dom";
import { row } from "../../../util/css/signin/style";
import {
  profileBottom,
  profileHeader,
  profileImage,
  profileWrapper,
} from "../../../util/css/mypage/ProfileHeader/style";
import { center } from "../../../util/css/mypage/mypage/style";

const ProfileHeader = (props: any) => {
  const { isMypage } = props;
  const baseProfileImage =
    "https://yt3.ggpht.com/ytc/AKedOLSYskiGDIyLCoFETAvHx4tHvHzlBKkpj3pJ36lpwQ=s900-c-k-c0x00ffffff-no-rj";

  return (
    <header css={profileHeader}>
      <img css={profileImage} alt="프로필 사진" src={baseProfileImage} />
      <div css={[column, profileWrapper]}>
        <h1>침착맨</h1>
        <p id="introduce">안녕하세요 저는 침착맨입니다.</p>
        <div css={[row, profileBottom]}>
          <h3>분야</h3>
          <p>프론트엔드</p>
          <p>학생</p>
          {isMypage ? (
            <Link to="/my-page-modify">
              <button css={[center]}>프로필 수정</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;

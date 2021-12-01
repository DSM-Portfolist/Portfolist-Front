/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { center } from "../../../util/css/mypage/mypage/style";
import { useRecoilState } from "recoil";
import { userInfoValue } from "../../../modules/selector/user";
import { getUser } from "../../../util/api/user/info";
import { token } from "../../../util/api";
import { UserInfoType } from "../../../util/interface/user";

interface Props {
  user?: UserInfoType;
}

const ProfileHeader = ({ user }: Props) => {
  const [myInfo, setMyInfo] = useRecoilState(userInfoValue);
  const baseProfileImage =
    "https://www.ibossedu.co.kr/template/DESIGN_shared/program/theme/01/THUMBNAIL_60_60_icon_rep_box.gif";

  const getUserInfo = useCallback(() => {
    getUser().then((res) => setMyInfo(res.data));
  }, [setMyInfo]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo, setMyInfo, user]);

  return (
    <S.Wrapper>
      <S.ProfileImage
        alt="프로필 사진"
        src={
          myInfo?.profile_img === null
            ? `${baseProfileImage}`
            : myInfo?.profile_img
        }
      />
      <S.ProfileWrapper>
        <h1>{myInfo?.name}</h1>
        {myInfo?.introduce === null ? (
          <p id="introduce">아직 소개가 없어요</p>
        ) : (
          <p id="introduce">{myInfo?.introduce}</p>
        )}

        <S.ProfileBottom>
          <h3>분야</h3>
          {myInfo?.field === null ? (
            <>선택된 분야가 없습니다.</>
          ) : (
            <>
              {myInfo?.field?.map((field) => (
                <S.FieldItem>{field}</S.FieldItem>
              ))}
            </>
          )}

          {token && (
            <Link to="/my-page-modify">
              <button css={[center]}>프로필 수정</button>
            </Link>
          )}
        </S.ProfileBottom>
      </S.ProfileWrapper>
    </S.Wrapper>
  );
};

export default ProfileHeader;

import React from "react";
import { DefaultProfile } from "../../../util/assets";
import { UserInfoType } from "../../../util/interface/user";
import * as S from "./style";

interface Props {
  userInfo: UserInfoType;
}

const UserProfileHeader = ({ userInfo }: Props) => {
  return (
    <S.Wrapper>
      <S.ProfileImage
        alt="프로필 사진"
        src={
          userInfo?.profile_img === null
            ? `${DefaultProfile}`
            : userInfo?.profile_img
        }
      />
      <S.ProfileWrapper>
        <h1>{userInfo?.name}</h1>
        {userInfo?.introduce === null ? (
          <p id="introduce">아직 소개가 없어요</p>
        ) : (
          <p id="introduce">{userInfo?.introduce}</p>
        )}

        <S.ProfileBottom>
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
        </S.ProfileBottom>
      </S.ProfileWrapper>
    </S.Wrapper>
  );
};

export default UserProfileHeader;

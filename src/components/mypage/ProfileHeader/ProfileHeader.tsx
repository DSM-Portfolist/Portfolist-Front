import { Link } from "react-router-dom";
import * as S from "./style";
import { token } from "../../../util/api/common";
import { UserInfoType } from "../../../util/interface/user";
import { DefaultProfile } from "../../../util/assets";

interface Props {
  user?: UserInfoType;
}

const ProfileHeader = ({ user }: Props) => {
  return (
    <S.Wrapper>
      <S.ProfileImage
        alt="프로필 사진"
        src={
          user?.profile_img === null ? `${DefaultProfile}` : user?.profile_img
        }
      />
      <S.ProfileWrapper>
        <h1>{user?.name}</h1>
        {user?.introduce === null ? (
          <p id="introduce">아직 소개가 없어요</p>
        ) : (
          <p id="introduce">{user?.introduce}</p>
        )}

        <S.ProfileBottom>
          <h3>분야</h3>
          {user?.field === null ? (
            <>선택된 분야가 없습니다.</>
          ) : (
            <>
              {user?.field?.map((field, index) => (
                <S.FieldItem key={index}>{field}</S.FieldItem>
              ))}
            </>
          )}

          {token && (
            <Link to="/my-page-modify">
              <button>프로필 수정</button>
            </Link>
          )}
        </S.ProfileBottom>
      </S.ProfileWrapper>
    </S.Wrapper>
  );
};

export default ProfileHeader;

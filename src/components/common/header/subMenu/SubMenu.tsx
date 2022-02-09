import { GithubUser } from "../../../../hook/githubUser";
import { ProfileImage } from "../../../../hook/profileImg";
import { UserInfoType } from "../../../../util/interface/user";
import * as S from "./style";

interface Props {
  data: UserInfoType;
}

const SubMenu = ({ data }: Props) => {
  return (
    <>
      <S.MoreItemInfo>
        <img src={ProfileImage(data?.profile_img)} alt="프로필사진" />
        <div className="info_wrpaper">
          <span>{data?.name}</span>
          <span>{GithubUser(data?.github_user)}</span>
        </div>
      </S.MoreItemInfo>
      <S.ItemBox></S.ItemBox>
    </>
  );
};

export default SubMenu;

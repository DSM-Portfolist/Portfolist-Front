import { GithubUser } from "../../../../hook/githubUser";
import { ProfileImage } from "../../../../hook/profileImg";
import styled from "@emotion/styled";
import { mainColor } from "../../../../util/css/color/color";
import ItemBox from "./ItemBox";
import { ToastSuccess } from "../../../../hook/toastHook";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { subMenu } from "../../../../modules/atom/header";
import { useQuery } from "react-query";
import { getUser } from "../../../../util/api/user/info";
import { DefaultProfile } from "../../../../util/assets";

const SubMenuBox = () => {
  const { push } = useHistory();
  const [moreItem, setMoreItem] = useRecoilState(subMenu);

  const logoutHandler = () => {
    push("/");
    ToastSuccess("로그아웃 되었습니다.");
    localStorage.removeItem("access_token_portfolist");
    localStorage.removeItem("refresh_token_portfolist");
  };

  const { data: user } = useQuery(["user"], () => getUser(), {
    keepPreviousData: true,
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  return (
    <NotiWrapper>
      <img
        className="profile-img"
        src={
          user?.data?.profile_img === null
            ? `${DefaultProfile}`
            : user?.data?.profile_img
        }
        alt="프로필 사진"
        onMouseOver={() => setMoreItem(true)}
        onMouseOut={() => setMoreItem(false)}
      />
      <SubMenuContainer
        style={moreItem ? { display: "flex" } : { display: "none" }}
        onMouseOver={() => setMoreItem(true)}
        onMouseOut={() => setMoreItem(false)}
      >
        <MoreItemInfo>
          <img src={ProfileImage(user?.data?.profile_img)} alt="프로필사진" />
          <div className="info_wrpaper">
            <span>{user?.data?.name}</span>
            <span>{GithubUser(user?.data?.github_user)}</span>
          </div>
        </MoreItemInfo>
        <ItemBox />
        <BottomMenu>
          <span onClick={logoutHandler}>로그아웃</span>
          <span onClick={() => ToastSuccess("개발중입니다.")}>문의하기</span>
        </BottomMenu>
      </SubMenuContainer>
    </NotiWrapper>
  );
};

const NotiWrapper = styled.li`
  position: relative;

  .noti-img {
    width: 25px;
    margin-top: 4px;
    height: 25px;
    cursor: pointer;
  }

  .profile-img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50px;
    cursor: pointer;
  }
`;

const SubMenuContainer = styled.div`
  justify-content: space-between;
  padding: 15px;
  position: absolute;
  width: 250px;
  height: 368px;
  top: 35px;
  right: -5px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  box-shadow: 0px 4px 9px rgba(92, 92, 92, 0.25);
  border-radius: 10px;
  background: #ffffff;
  flex-direction: column;
  overflow: hidden;
  cursor: auto;
  z-index: 1;

  transition: all 0.2s;
`;

const MoreItemInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 2px solid ${mainColor};

  img {
    border-radius: 50px;
    width: 45px;
    height: 45px;
  }

  .info_wrpaper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 0.7rem;

    span:nth-of-type(1) {
      font-size: 16px;
    }
    span:nth-of-type(2) {
      font-size: 14px;
      color: #555555;
    }
  }
`;

const BottomMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & span {
    color: #696969;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export default SubMenuBox;

import { useQuery } from "react-query";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ToastSuccess } from "../../../hook/toastHook";
import { subMenu } from "../../../modules/atom/header";
import { getUser } from "../../../util/api/user/info";
import { DefaultProfile } from "../../../util/assets";
import { NotiWrapper } from "./notification/style";
import * as S from "./style";

const SubMenu = () => {
  const { push } = useHistory();
  const [moreItem, setMoreItem] = useRecoilState(subMenu);

  const { data : user } = useQuery(["user"], () => getUser(), {
    keepPreviousData: true,
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  return (
    <>
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
        <S.MoreItem
          style={moreItem ? { display: "flex" } : { display: "none" }}
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

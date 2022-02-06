import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { Header } from "../../..";
import { userInfoValue } from "../../../../modules/selector/user";
import { getUser } from "../../../../util/api/user/info";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import ImageUploadWrapper from "./ImageUploadWrapper";
import MyInfoModify from "./MyInfoModify";
import MypageModifyMainContent from "./MypageModifyMainContent";
import SecessionModal from "./SecessionModal";

const MypageModify = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoValue);

  const getUserInfo = useCallback(() => {
    getUser().then((res) => setUserInfo(res.data));
  }, [setUserInfo]);

  return (
    <S.MypageModifyContainer modal={modal}>
      <SecessionModal modal={modal} setModal={setModal} />
      <Header />
      <S.MainSection>
        <S.MyProfileWrapper>
          <ImageUploadWrapper userInfo={userInfo} />
          <MyInfoModify getUserInfo={getUserInfo} />
        </S.MyProfileWrapper>
        <MypageModifyMainContent setModal={setModal} modal={modal} />
      </S.MainSection>
    </S.MypageModifyContainer>
  );
};

export default MypageModify;

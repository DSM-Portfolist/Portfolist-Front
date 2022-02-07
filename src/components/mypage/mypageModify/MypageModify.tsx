import { useState } from "react";
import { useQuery } from "react-query";
import { Header } from "../..";
import { getUser } from "../../../util/api/user/info";
import * as S from "../../../util/css/mypage/mypage/mypageModify/style";
import ImageUploadWrapper from "./ImageUploadWrapper";
import MyInfoModify from "./MyInfoModify";
import MypageModifyMainContent from "./MypageModifyMainContent";
import SecessionModal from "./SecessionModal";

const MypageModify = () => {
  const [modal, setModal] = useState<boolean>(false);

  const { data: user } = useQuery(["user"], () => getUser(), {
    keepPreviousData: true,
    staleTime: Infinity,
  });

  return (
    <S.MypageModifyContainer modal={modal}>
      <SecessionModal modal={modal} setModal={setModal} />
      <Header />
      <S.MainSection>
        <S.MyProfileWrapper>
          <ImageUploadWrapper user={user?.data} />
          <MyInfoModify user={user?.data} />
        </S.MyProfileWrapper>
        <MypageModifyMainContent setModal={setModal} modal={modal} />
      </S.MainSection>
    </S.MypageModifyContainer>
  );
};

export default MypageModify;

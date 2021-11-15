import React, { useState } from "react";
import { Header } from "../../..";
import * as S from "../../../../util/css/mypage/mypage/mypageModify/style";
import ImageUploadWrapper from "./ImageUploadWrapper";
import MyInfoModify from "./MyInfoModify";
import MypageModifyMainContent from "./MypageModifyMainContent";
import SecessionModal from "./SecessionModal";

const MypageModify = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <S.MypageModifyContainer modal={modal}>
      <SecessionModal modal={modal} setModal={setModal} />
      <Header />
      <S.MainSection>
        <S.MyProfileWrapper>
          <ImageUploadWrapper />
          <MyInfoModify />
        </S.MyProfileWrapper>
        <MypageModifyMainContent setModal={setModal} modal={modal} />
      </S.MainSection>
    </S.MypageModifyContainer>
  );
};

export default MypageModify;

/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Header } from "../../..";
import {
  MainSection,
  MyProfileWrapper,
  MypageModifyContainer,
} from "../../../../util/css/mypage/mypage/mypageModify/style";
import ImageUploadWrapper from "./ImageUploadWrapper";
import MyInfoModify from "./MyInfoModify";
import MypageModifyMainContent from "./MypageModifyMainContent";
import SecessionModal from "./SecessionModal";

const MypageModify = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <MypageModifyContainer modal={modal}>
      <SecessionModal modal={modal} setModal={setModal} />
      <Header />
      <MainSection>
        <MyProfileWrapper>
          <ImageUploadWrapper />
          <MyInfoModify />
        </MyProfileWrapper>
        <MypageModifyMainContent setModal={setModal} modal={modal} />
      </MainSection>
    </MypageModifyContainer>
  );
};

export default MypageModify;

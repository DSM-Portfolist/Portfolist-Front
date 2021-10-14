/** @jsxImportSource @emotion/react */
import React from "react";
import { Header } from "../../..";
import {
  MainSection,
  MyProfileWrapper,
} from "../../../../util/css/mypage/mypage/mypageModify/style";
import {
  baseBackground,
  column,
} from "../../../../util/css/mypage/mypage/style";
import ImageUploadWrapper from "./ImageUploadWrapper";
import MyInfoModify from "./MyInfoModify";
import MypageModifyMainContent from "./MypageModifyMainContent";

const MypageModify = () => {
  return (
    <div css={[baseBackground, column]}>
      <Header></Header>
      <MainSection>
        <MyProfileWrapper>
          <ImageUploadWrapper />
          <MyInfoModify />
        </MyProfileWrapper>
        <MypageModifyMainContent />
      </MainSection>
    </div>
  );
};

export default MypageModify;

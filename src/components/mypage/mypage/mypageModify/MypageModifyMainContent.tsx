import React from "react";
import { MainContentWrapper } from "../../../../util/css/mypage/mypage/mypageModify/style";
import PasswordModify from "./PasswordModify";
import SecessionModify from "./SecessionModify";

const MypageModifyMainContent = () => {
  return (
    <MainContentWrapper>
      <PasswordModify />
      <SecessionModify />
    </MainContentWrapper>
  );
};

export default MypageModifyMainContent;

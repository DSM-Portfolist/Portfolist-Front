import React from "react";
import { ContentItem } from "../../../../../util/css/mypage/mypage/mypageModify/style";
import * as S from "./style";

const NotificationModule = () => {
  return (
    <S.NotificationModuleContainer>
      <h1>알림 ON/OFF</h1>
      <S.ToggleButton>
        <div></div>
        <div></div>
      </S.ToggleButton>
      <p>포트폴리스트 알림을 설정  할 수 있습니다.</p>
    </S.NotificationModuleContainer>
  );
};

export default NotificationModule;

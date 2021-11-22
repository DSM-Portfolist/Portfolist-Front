import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { ToastError, ToastSuccess } from "../../../../../hook/toastHook";
import { notificationStatus } from "../../../../../modules/atom/mypage/mypage";
import { putNotification } from "../../../../../util/api/mypage";
import * as S from "./style";

const NotificationModule = () => {
  const status = useRecoilValue(notificationStatus);
  const [isClick, setIsClick] = useState<boolean>(status.notification);

  const toggleButton = () => {
    try {
      if (isClick) {
        setIsClick(false);
        putNotification(true);
        ToastSuccess("포트폴리오 알림이 활성화되었습니다.");
      } else {
        setIsClick(true);
        putNotification(false);
        ToastSuccess("포트폴리오 알림이 비활성화되었습니다.");
      }
    } catch (e) {
      ToastError("실패했습니다.");
      throw e;
    }
  };

  return (
    <S.NotificationModuleContainer>
      <h1>알림 ON/OFF</h1>
      <S.ToggleButton onClick={toggleButton} isClick={isClick}>
        <div></div>
        <div></div>
      </S.ToggleButton>
      <p>포트폴리스트 알림을 설정 할 수 있습니다.</p>
    </S.NotificationModuleContainer>
  );
};

export default NotificationModule;

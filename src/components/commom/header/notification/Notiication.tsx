import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { notiBox } from "../../../../modules/atom/header";
import { notificationSelector } from "../../../../modules/selector/user";
//import { notificationStatus } from "../../../modules/atom/mypage/mypage";
import { token } from "../../../../util/api/common";
import { NoNotification, Notification } from "../../../../util/assets";
import NotiItem from "./NotiItem";
import * as S from "./style";

const Notiication = () => {
  const [noti, setNoti] = useRecoilState(notiBox);

  const notification = useRecoilValue(notificationSelector);
  //const status = useRecoilValue(notificationStatus);

  return (
    <>
      {token && (
        <S.NotiWrapper>
          <img
            className="noti-img"
            src={
              notification?.length > 0 ? `${Notification}` : `${NoNotification}`
            }
            alt="알림아이콘"
            onClick={() => setNoti(!noti)}
          />
          <S.Notification
            noti={noti}
            style={noti ? { height: 200 } : { height: 0 }}
          >
            {notification?.length === 0 ? (
              <div className="notification-none">알림이 없습니다.</div>
            ) : (
              <>
                {notification?.map((item, index) => (
                  <NotiItem key={index} name={item.name} type={item.type} />
                ))}
              </>
            )}
          </S.Notification>
        </S.NotiWrapper>
      )}
    </>
  );
};

export default Notiication;

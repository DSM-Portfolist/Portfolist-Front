import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { notiBox } from "../../../../modules/atom/header";
import { isNotificationDone } from "../../../../modules/atom/mypage/mypage";
import { notificationSelector } from "../../../../modules/selector/user";
import { getNotificationStatus } from "../../../../util/api/mypage";
import { NoNotification, Notification } from "../../../../util/assets";
import NotiItem from "./NotiItem";
import * as S from "./style";

const Notiication = () => {
  const [noti, setNoti] = useRecoilState<boolean>(notiBox);
  const [status, setStatus] = useState<boolean>(false);

  const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;
  const notification = useRecoilValue(notificationSelector);
  const isNo = useRecoilValue(isNotificationDone);

  const getNotification = useCallback(async () => {
    try {
      const data = await getNotificationStatus();
      setStatus(data.data.notification);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getNotification();
  }, [isNo]);

  return (
    <>
      {token && (
        <S.NotiWrapper>
          <img
            className="noti-img"
            src={status ? `${Notification}` : `${NoNotification}`}
            alt="알림아이콘"
            onMouseOver={() => setNoti(true)}
            onMouseOut={() => setNoti(false)}
          />

          <S.Notification
            noti={noti}
            style={noti ? { height: 200 } : { height: 0 }}
            onMouseOver={() => setNoti(true)}
            onMouseOut={() => setNoti(false)}
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

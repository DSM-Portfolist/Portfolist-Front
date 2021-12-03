import React, { useEffect, useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { notiBox } from "../../../../modules/atom/header";
import {
  isNotificationDone,
  notificationIsClick,
} from "../../../../modules/atom/mypage/mypage";
import { notificationSelector } from "../../../../modules/selector/user";
import { getNotificationStatus } from "../../../../util/api/mypage";
import { NoNotification, Notification } from "../../../../util/assets";
import NotiItem from "./NotiItem";
import * as S from "./style";

const Notiication = () => {
  const [noti, setNoti] = useRecoilState(notiBox);

  const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;
  const notification = useRecoilValue(notificationSelector);
  const [isClick, setIsClick] = useRecoilState(notificationIsClick);
  const [status, setStatus] = useState<boolean>(false);
  const [isNo, setIsNo] = useRecoilState(isNotificationDone);

  const getNotification = useCallback(async () => {
    try {
      const data = await getNotificationStatus();
      console.log(data);
      setStatus(data.data.notification);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    console.log(`isCLick 빠겨용`);
    getNotification();
  }, [isNo]);

  return (
    <>
      {token && (
        <S.NotiWrapper>
          {status ? (
            <img
              className="noti-img"
              src={Notification}
              alt="알림아이콘"
              onClick={() => setNoti(!noti)}
            />
          ) : (
            <img
              className="noti-img"
              src={NoNotification}
              alt="알림아이콘"
              onClick={() => setNoti(!noti)}
            />
          )}
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

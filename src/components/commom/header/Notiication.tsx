import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { notiBox } from "../../../modules/atom/header";
import { notificationSelector } from "../../../modules/selector/mainpage";
import { NoNotification, Notification } from "../../../util/assets";
import NotiItem from "./NotiItem";
import * as S from "./style";

const Notiication = () => {
  const [noti, setNoti] = useRecoilState(notiBox);

  const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;
  const notification = useRecoilValue(notificationSelector);

  return (
    <>
      {token ? (
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
              <>알림이 없습니다.</>
            ) : (
              <>
                {notification?.map((item, index) => (
                  <NotiItem key={index} name={item.name} type={item.type} />
                ))}
              </>
            )}
          </S.Notification>
        </S.NotiWrapper>
      ) : (
        ""
      )}
    </>
  );
};

export default Notiication;

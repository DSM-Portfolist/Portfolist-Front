import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { notiBox } from "../../../modules/atom/header";
import { notificationSelector } from "../../../modules/atom/main";
import { NoNotification, NotiIcon } from "../../../util/assets";
import NotiItem from "./NotiItem";
import * as S from "./style";

const Notiication = () => {
  const [noti, setNoti] = useRecoilState(notiBox);
  const notiValue = useRecoilValue(notificationSelector);
  const test = true;

  return (
    <S.NotiWrapper>
      <img
        className="noti-img"
        src={test ? `${NoNotification}` : `${NotiIcon}`}
        alt="알림아이콘"
        onClick={() => setNoti(!noti)}
      />
      <S.Notification
        noti={noti}
        style={noti ? { height: 200 } : { height: 0 }}
      >
        {notiValue.map((item, index) => (
          <NotiItem key={index} name={item.name} type={item.type} />
        ))}
      </S.Notification>
    </S.NotiWrapper>
  );
};

export default Notiication;

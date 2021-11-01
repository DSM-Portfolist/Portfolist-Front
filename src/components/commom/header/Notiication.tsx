import React from "react";
import { useRecoilState } from "recoil";
import { notiBox } from "../../../modules/atom/header";
import { NoNotification, NotiIcon } from "../../../util/assets";
import * as S from "./style";

const Notiication = () => {
  const [noti, setNoti] = useRecoilState(notiBox);
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
      ></S.Notification>
    </S.NotiWrapper>
  );
};

export default Notiication;

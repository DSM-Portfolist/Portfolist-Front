import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { notiBox } from "../../../../modules/atom/header";
import { notificationSelector } from "../../../../modules/selector/user";
import { getNotificationStatus } from "../../../../util/api/mypage";
import { NoNotification, Notification } from "../../../../util/assets";
import { notificationType } from "../../../../util/interface/main/portfolio";
import NotiItem from "./NotiItem";
import * as S from "./style";

const Notiication = () => {
  const [noti, setNoti] = useRecoilState<boolean>(notiBox);

  const token = `Bearer ${localStorage.getItem("access_token_portfolist")}`;
  const notification = useRecoilValue(notificationSelector);

  const { data: notiStatus } = useQuery(
    "noti_status",
    () => getNotificationStatus(),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return (
    <>
      {token && (
        <S.NotiWrapper>
          <img
            className="noti-img"
            src={
              notiStatus?.data.notification
                ? `${Notification}`
                : `${NoNotification}`
            }
            alt="알림아이콘"
            onMouseOver={() => setNoti(true)}
            onMouseOut={() => setNoti(false)}
          />

          <S.Notification
            noti={noti}
            style={noti ? { height: "fit-content" } : { height: 0 }}
            onMouseOver={() => setNoti(true)}
            onMouseOut={() => setNoti(false)}
          >
            {notification?.length === 0 ? (
              <div className="notification-none">알림이 없습니다.</div>
            ) : (
              <>
                {notification?.map((item: notificationType) => (
                  <NotiItem key={item.id} item={item} />
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

import { atom, selector } from "recoil";
import { getNotification } from "../../../util/api/mypage";
import { getUser } from "../../../util/api/user/info";
import { notificationType } from "../../../util/interface/main/portfolio";
import { UserInfoType } from "../../../util/interface/user";

export const userInfoValue = atom<UserInfoType | undefined>({
  key: "userInfo",
  default: {
    field: [""],
    introduce: "",
    name: "string",
    profile_img: "string",
    github_user: false,
  },
});

// 마이페이지 유저 정보
export const myInfoSelector = selector<UserInfoType>({
  key: "getUser",
  get: async () => {
    try {
      const res = await getUser();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  set: ({ set }, newValue) => {
    set(userInfoValue, newValue);
  },
});

export const notificationSelector = selector<notificationType[]>({
  key: "notification/get",
  get: async () => {
    try {
      const res = await getNotification();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

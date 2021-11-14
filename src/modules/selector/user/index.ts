import { atom, selector } from "recoil";
import { getUser } from "../../../util/api/user/info";
import { UserInfoType } from "../../../util/interface/user";

export const userInfoValue = atom<UserInfoType>({
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
    const res = await getUser();
    return res.data;
  },
  set: ({ set }, newValue) => {
    set(userInfoValue, newValue);
  },
});

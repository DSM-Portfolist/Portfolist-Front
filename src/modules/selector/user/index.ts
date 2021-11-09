import { selector } from "recoil";
import { getUser } from "../../../util/api/user/info";
import { UserInfoType } from "../../../util/interface/user";

// 마이페이지 유저 정보
export const userInfoSelector = selector<UserInfoType>({
  key: "getUser",
  get: async () => {
    const res = await getUser();
    return res.data;
  },
});

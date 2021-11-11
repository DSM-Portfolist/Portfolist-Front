import { selectorFamily } from "recoil";
import { getUserInfo } from "../../../util/api/user/info";
import { getUserPortfolioList } from "../../../util/api/user/portfolio";
import { MyPortfolioType } from "../../../util/interface/MyPage/myPortfolioType";
import { UserInfoType } from "../../../util/interface/user";

export const userPortfolioListSelector = selectorFamily<
  MyPortfolioType[],
  number
>({
  key: "userPortfolioList/get",
  get: (userId) => async () => {
    try {
      const res = await getUserPortfolioList(userId);
      return res.data;
    } catch (e) {
      throw e;
    }
  },
});

export const userInfoSelector = selectorFamily<UserInfoType, number>({
  key: "userInfo/get",
  get: (userId) => async () => {
    try {
      const res = await getUserInfo(userId);
      return res.data;
    } catch (e) {
      throw e;
    }
  },
});

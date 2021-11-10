import { selectorFamily } from "recoil";
import { getUserPortfolioList } from "../../../util/api/user/portfolio";
import { MyTouchingPortfolioType } from "../../../util/interface/MyPage/myPortfolioType";

export const userPortfolioListSelector =
  selectorFamily<MyTouchingPortfolioType[] , number>({
    key: "userPortfolioList/get",
    get: (userId) => async () => {
      const res = await getUserPortfolioList(userId);

      return res.data;
    },
  });

import { selector } from "recoil";
import { getMyPortfolioList } from "../../../util/api/user/portfolio";
import { MyPortfolioType } from "../../../util/interface/MyPage/myPortfolioType";

export const myPortfolioListSelector = selector<MyPortfolioType[]>({
  key: "myPortfolioList/get",
  get: async () => {
    const res = await getMyPortfolioList();
    return res.data;
  },
});

import { atom, selector } from "recoil";
import {
  getMyPortfolioList,
  getMyTouchingPortfolioList,
} from "../../../util/api/user/portfolio";
import {
  MyPortfolioType,
  MyTouchingPortfolioType,
} from "../../../util/interface/MyPage/myPortfolioType";

export const myPortfolioList = atom<
  MyPortfolioType[] | MyTouchingPortfolioType[]
>({
  key: "portfolioList",
  default: [],
});
export const myPortfolioListSelector = selector<MyPortfolioType[]>({
  key: "myPortfolioList/get",
  get: async () => {
    const res = await getMyPortfolioList();
    return res.data;
  },
});

export const myTouchingPortfolioSelector = selector({
  key: "myTouchingPortfolio/get",
  get: async () => {
    const res = await getMyTouchingPortfolioList();
    return res.data.content;
  },
});

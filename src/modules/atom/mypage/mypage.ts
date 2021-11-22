import { atom, selector } from "recoil";
import { getNotificationStatus } from "../../../util/api/mypage";
import {
  getMyPortfolioList,
  getMyTouchingPortfolioList,
} from "../../../util/api/user/portfolio";
import {
  MyPortfolioType,
  MyTouchingPortfolioType,
} from "../../../util/interface/MyPage/myPortfolioType";

export const myName = atom<string>({
  key: "myName",
  default: "",
});

export const myIntroduce = atom<string>({
  key: "myIntroduce",
  default: "",
});

export const myPortfolioList = atom<
  MyPortfolioType[] | MyTouchingPortfolioType[]
>({
  key: "portfolioList",
  default: [],
});
export const myPortfolioListSelector = selector<MyPortfolioType[]>({
  key: "myPortfolioList/get",
  get: async () => {
    try {
      const res = await getMyPortfolioList();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const myTouchingPortfolioSelector = selector({
  key: "myTouchingPortfolio/get",
  get: async () => {
    try {
      const res = await getMyTouchingPortfolioList();
      return res.data.content;
    } catch (e) {
      console.log(e);
    }
  },
});

export const notificationStatus = selector({
  key: "notificationStatus/get",
  get: async () => {
    try {
      const res = await getNotificationStatus();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

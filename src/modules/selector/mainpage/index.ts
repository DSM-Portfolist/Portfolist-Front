import { selector } from "recoil";
import {
  getMonthPortfolio,
  getRecentPortfolio,
} from "../../../util/api/mainpage";
import {
  monthPortfolioType,
  recentPortfolioType,
} from "../../../util/interface/main/portfolio";

export const monthPortfolioSelector = selector<monthPortfolioType>({
  key: "monthPortfolio/get",
  get: async () => {
    try {
      const res = await getMonthPortfolio();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const recentPortfolioSelector = selector<recentPortfolioType[]>({
  key: "recentPortfolio/get",
  get: async () => {
    try {
      const res = await getRecentPortfolio();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

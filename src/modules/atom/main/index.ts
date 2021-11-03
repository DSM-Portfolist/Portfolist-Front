import { selector } from "recoil";
import {
  getMonthPortfolio,
  getRecentPortfolio,
} from "../../../util/api/mainpage";

export const monthPortfolioSelector = selector({
  key: "monthPortfolio/get",
  get: async () => {
    const res = await getMonthPortfolio();
    return res.data;
  },
});

export const recentPortfolioSelector = selector({
  key: "recentPortfolio/get",
  get: async () => {
    const res = await getRecentPortfolio();
    return res.data;
  },
});

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
    const res = await getMonthPortfolio();
    return res.data;
  },
});

export const recentPortfolioSelector = selector<recentPortfolioType[]>({
  key: "recentPortfolio/get",
  get: async () => {
    const res = await getRecentPortfolio();
    return res.data;
  },
});

import { selector } from "recoil";
import { getMonthPortfolio } from "../../../../util/api/mainpage";

export const monthPortfolioSelector = selector({
  key: "monthPortfolio/get",
  get: async () => {
    const res = await getMonthPortfolio();
    return res.data;
  },
});

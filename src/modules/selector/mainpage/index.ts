import { selector } from "recoil";
import {
  getMonthPortfolio,
  getNotification,
  getRecentPortfolio,
} from "../../../util/api/mypage";
import {
  monthPortfolioType,
  notificationType,
  recentPortfolioType,
} from "../../../util/interface/main/portfolio";

export const monthPortfolioSelector = selector<monthPortfolioType>({
  key: "monthPortfolio/get",
  get: async () => {
    try {
      const res = await getMonthPortfolio();
      return res.data;
    } catch (e) {
      throw e;
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
      throw e;
    }
  },
});

export const notificationSelector = selector<notificationType[]>({
  key: "notification/get",
  get: async () => {
    try {
      const res = await getNotification();
      return res.data;
    } catch (e) {
      throw e;
    }
  },
});

import { atom, selector } from "recoil";
import {
  getPortfolio,
  getPortfolioList,
} from "../../../util/api/portfolio/portfolio";
import { PortfolioType } from "../../../util/interface/portfolio/portfolioDetailType";

export const portfolioId = atom<number>({
  key: "portfolioId",
  default: 0,
});

export const isLoading = atom<boolean>({
  key: "isLoading",
  default: true,
});

export const isError = atom<boolean>({
  key: "isError",
  default: false,
});

export const getPortListSelector = selector({
  key: "portfolioList/get",
  get: async () => {
    const res = await getPortfolioList();
    console.log(res);
    return res.data;
  },
});

export const getPortfolioSelecor = selector<PortfolioType>({
  key: "portfolio/get",
  get: async ({ get }) => {
    const id = await get(portfolioId);
    const res = await getPortfolio(id);
    return res.data;
  },
});

/* export const getPortfolioSelecor = selectorFamily<PortfolioType, number>({
  key: "portfolio/get",
  get: (id: number) => async () => {
    const posts = await getPortfolio(id);
    return posts;
  },
});
 */

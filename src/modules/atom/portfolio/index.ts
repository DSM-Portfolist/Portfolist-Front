import { atom, selector } from "recoil";
import { getPortfolioList } from "../../../util/api/portfolio/portfolio";

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


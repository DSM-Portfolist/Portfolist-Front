import { atom, selector } from "recoil";
import { getMonthPortfolio } from "../../../../util/api/mainpage";
import { SelectFieldListType } from "../../../../util/interface/main/portfolio";

export const selectFieldNum = atom<number>({
  key: "selectFieldNum",
  default: 1,
});

export const selectFieldList = atom<SelectFieldListType[]>({
  key: "selectFieldList",
  default: [{ id: 1 }],
});

export const monthPortfolioSelector = selector({
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

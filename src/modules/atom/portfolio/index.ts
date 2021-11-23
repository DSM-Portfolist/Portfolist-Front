import { atom, selector, useRecoilValue } from "recoil";
import {
  getField,
  getPortfolioList,
} from "../../../util/api/portfolio/portfolio";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { FieldType } from "../../../util/interface/Sign/loginType";
import { searchValue, useFieldValue } from "./search";

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

export const fieldItem = atom<FieldType[]>({
  key: "field",
  default: [],
});

export const portfolioList = atom<PortListType[]>({
  key: "portfolioList",
  default: [],
});

// 포트폴리오 리스트 가져오기
export const getPortListSelector = selector<PortListType[]>({
  key: "portfolioList/get",
  get: async ({ get }) => {
    try {
      const field = await get(useFieldValue);
      const query = await get(searchValue);
      const res = await getPortfolioList(field, query, "title");
      return res.data.portfolio_list;
    } catch (e) {
      console.log(e);
    }
  },
  set: ({ set }, newValue) => {
    set(portfolioList, newValue);
  },
});

// 필드 가져오기
export const getFieldSelector = selector({
  key: "field/get",
  get: async () => {
    try {
      const res = await getField();
      return res.data;
    } catch (e) {
      throw e;
    }
  },
});

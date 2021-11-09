import { atom, selector } from "recoil";
import {
  getField,
  getPortfolioList,
} from "../../../util/api/portfolio/portfolio";
import { FieldType } from "../../../util/interface/Sign/loginType";

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

// 포트폴리오 리스트 가져오기
export const getPortListSelector = selector({
  key: "portfolioList/get",
  get: async () => {
    const res = await getPortfolioList();
    console.log(res);
    return res.data;
  },
});

export const fieldItem = atom<FieldType[]>({
  key: "field",
  default: [],
});

// 필드 가져오기
export const getFieldSelector = selector({
  key: "field/get",
  get: async () => {
    const res = await getField();
    return res.data;
  },
});

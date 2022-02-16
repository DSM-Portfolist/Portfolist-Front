import { atom, selector } from "recoil";
import { getField } from "../../../util/api/portfolio/portfolio";
import { PortListType } from "../../../util/interface/portfolio/portListType";
import { FieldType } from "../../../util/interface/Sign/loginType";

export const portfolioId = atom<number | any>({
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

export const portfolioList = atom<PortListType[]>({
  key: "portfolioList",
  default: [],
});

// 필드 가져오기
export const getFieldSelector = selector<FieldType[]>({
  key: "field/get",
  get: async () => {
    try {
      const res = await getField();
      return res?.data;
    } catch (e) {
      throw e;
    }
  },
});

export const fieldItem = atom<FieldType[]>({
  key: "field",
  default: getFieldSelector,
});

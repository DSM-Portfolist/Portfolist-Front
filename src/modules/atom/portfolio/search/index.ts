import { atom } from "recoil";

export const searchValue = atom<string | any>({
  key: "searchValue",
  default: "",
});

export const useFieldValue = atom<string[]>({
  key: "useFieldValue",
  default: [],
});

export const sortValue = atom<string>({
  key: "sortValue",
  default: "desc",
});

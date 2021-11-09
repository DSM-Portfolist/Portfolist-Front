import { atom } from "recoil";

export const searchValue = atom<string>({
  key: "searchValue",
  default: "",
});

export const useFieldValue = atom<string[]>({
  key: "useFieldValue",
  default: [],
});

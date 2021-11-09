import { atom } from "recoil";

export const searchValue = atom<string>({
  key: "searchValue",
  default: "",
});

import { atom } from "recoil";

export const tokenAtom = atom<any>({
  key: "tokenAtom",
  default: localStorage.getItem("access_token_portfolist"),
});

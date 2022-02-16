import { atom } from "recoil";

export const tokenAtom = atom<any>({
  key: "tokenAtom",
  default: localStorage.getItem("access_token_portfolist"),
});

export const reload = atom({
  key: "reload",
  default: 0,
});

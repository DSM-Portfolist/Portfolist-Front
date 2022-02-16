import { atom } from "recoil";

export const isModifyModal = atom<boolean>({
  key: "isModifyModal",
  default: false,
});

export const isClickMyPortfolioAtom = atom<boolean>({
  key: "isClickMyPortfolioAtom",
  default: true,
})
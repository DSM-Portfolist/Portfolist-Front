import { atom, selector } from "recoil";

export const isModifyModal = atom<boolean>({
  key: "isModifyModal",
  default: false,
});

import { atom } from "recoil";

export const isModifyModal = atom<boolean>({
  key: "isModifyModal",
  default: false,
});

import { atom } from "recoil";

export const notiBox = atom<boolean>({
  key: "noti",
  default: false,
});

export const searchBar = atom<boolean>({
  key: "isFocusing",
  default: false,
});

export const subMenu = atom<boolean>({
  key: "moreItme",
  default: false,
});

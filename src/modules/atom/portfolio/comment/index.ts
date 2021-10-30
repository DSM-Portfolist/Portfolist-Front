import { atom } from "recoil";
import { CommentType } from "../../../../util/interface/portfolio/commentType";

export const commentList = atom<CommentType[]>({
  key: "commentList",
  default: [],
});

export const commentContent = atom<string>({
  key: "commentContent",
  default: "",
});

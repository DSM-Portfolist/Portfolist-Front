import { atom } from "recoil";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { PortfolioType } from "../../../util/interface/portfolio/portfolioDetailType";

export const portfoilo = atom<PortfolioType | undefined>({
  key: "portfolioValue",
  default: undefined,
});

export const portField = atom<string[]>({
  key: "portField",
  default: [],
});

export const comment_List = atom<CommentType[]>({
  key: "commentList",
  default: [],
});

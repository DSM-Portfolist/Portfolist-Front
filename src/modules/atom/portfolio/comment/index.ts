import { atom, selector } from "recoil";
import { portfolioId } from "..";
import { getComment } from "../../../../util/api/portfolio/comment";
import { CommentType } from "../../../../util/interface/portfolio/commentType";

export const commentList = atom<CommentType[]>({
  key: "commentList",
  default: [],
});

export const commentContent = atom<string>({
  key: "commentContent",
  default: "",
});

export const getCommentList = selector({
  key: "comments/get",
  get: async ({ get }) => {
    const id = await get(portfolioId);
    const res = await getComment(id);
    return res.data.comments;
  },
});

import { atom, selectorFamily } from "recoil";
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

export const commentListSelector = selectorFamily<CommentType[], number>({
  key: "comments/get",
  get: (id) => async () => {
    try {
      const res = await getComment(id);
      return res.data.comments;
    } catch (e) {
      console.log(e);
    }
  },
});

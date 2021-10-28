import { atom } from "recoil";
import { CommentType } from "../../../util/interface/portfolio/commentType";
import { PortfolioType } from "../../../util/interface/portfolio/portfolioDetailType";

export const portfoilo = atom<PortfolioType>({
  key: "portfolioValue",
  default: {
    certificate: [""],
    comment_list: [
      {
        name: "",
        cdate: "",
        comment_content: "",
        comment_id: 0,
        is_mine: false,
        profile_img: "",
        re_comment_list: [
          {
            is_mine: false,
            name: "",
            profile_img: "",
            rc_date: "",
            re_comment_content: "",
            re_comment_id: 0,
          },
        ],
      },
    ],
    container_list: [
      {
        container_title: "",
        box_img: [""],
        box_list: [{ box_title: "", box_content: "" }],
      },
    ],
    create_date: "",
    field: [""],
    file: "",
    icon: "",
    introduce: "",
    link: "",
    more_info_list: [{ name: "", content: "" }],
    name: "",
    profile_img: "",
    title: "",
    total_touching: 0,
    touched: false,
    user_id: 0,
  },
});

export const portField = atom<string[]>({
  key: "portField",
  default: [],
});

export const comment_List = atom<CommentType[]>({
  key: "commentList",
  default: [],
});

export const commentContent = atom<string>({
  key: "commentContent",
  default: "",
});

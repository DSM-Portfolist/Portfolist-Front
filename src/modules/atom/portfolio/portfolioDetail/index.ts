import { atom } from "recoil";
import { PortfolioType } from "../../../../util/interface/portfolio/portfolioDetailType";

export const portfoilo = atom<PortfolioType>({
  key: "portfolioValue",
  default: {
    id: 0,
    certificate_container_list: [
      {
        title: "",
        certificate_list: [""],
      },
    ],
    container_list: [
      {
        container_title: "",
        container_img: [""],
        container_text_list: [{ box_title: "", box_content: "" }],
      },
    ],
    create_date: "",
    field: [""],
    file: "",
    icon: "",
    introduce: "",
    is_mine: false,
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

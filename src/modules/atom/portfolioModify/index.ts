import { atom } from "recoil";
import { imageList } from "../../../components/portfolioMake/bannerContainer/items/ImageSelector";
import { PortfolioType } from "../../../util/interface/portfolio/portfolioDetailType";
import { BannderStateType } from "../../../util/interface/portfolioPost/postType";

export const container_list_modify_atom = atom<any>({
  key: "container_text_Modify",
  default: [
    {
      container_title: "",
      container_text_list: [
        {
          box_title: "",
          box_content: "",
        },
      ],
      container_img_list: [],
    },
  ],
});

export const bannerModifyImgAtom = atom<BannderStateType>({
  key: "bannerModifyImgAtom",
  default: {
    thumbnail: imageList[0].url,
    isClickBannder: true,
  },
});

export const portfolioModifyList = atom<PortfolioType>({
  key: "portfolioModifyListAtom",
  default: {
    portfolio_id: 0,
    certificate_container_list: [
      {
        title: "",
        certificate_list: [""],
      },
    ],
    container_list: [
      {
        container_title: "",
        container_img_list: [""],
        container_text_list: [{ box_title: "", box_content: "" }],
      },
    ],
    create_date: "",
    field: [""],
    file: "",
    icon: "",
    introduce: "",
    mine: false,
    link: "",
    more_info: [{ name: "", content: "" }],
    user: {
      name: "",
      profile_img: "",
      user_id: 0,
    },
    title: "",
    total_touching: 0,
    touched: false,
    open: false,
    thumbnail: "",
  },
});

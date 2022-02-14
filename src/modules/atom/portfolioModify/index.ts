import { atom } from "recoil";
import { imageList } from "../../../components/portfolioMake/bannerContainer/items/ImageSelector";
import {
  BannderStateType,
} from "../../../util/interface/portfolioPost/postType";

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

export const portfolioModifyList = atom({
    key: "portfolioModifyListAtom",
    default: {
      title: "",
      introduce: "",
      field: [1], //이거 없음
      open: true, //이거 없음
      more_info: [
        {
          name: "",
          content: "",
        },
      ],
      container_list: [
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
      certificate_container_list: [
        {
          title: "",
          certificate_list: [""],
        },
      ],
      link: "",
      file: "",
      thumbnail: "",
    },
});

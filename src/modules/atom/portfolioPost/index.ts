import { atom } from "recoil";
import { imageList } from "../../../components/portfolioMake/bannerContainer/items/ImageSelector";
import {
  ContainerListType,
  BannderStateType,
} from "../../../util/interface/portfolioPost/postType";

interface BoxDataType {
  id?: number;
  box_title: string;
  box_content: string;
}

export const container_list_atom = atom<any>({
  key: "container_text",
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

export const bannerImgAtom = atom<BannderStateType>({
  key: "bannerImgAtom",
  default: {
    thumbnail: imageList[0].url,
    isClickBannder: true,
  },
});

export const portfolioMakeList = atom({
  key: "portfolioMakeListAtom",
  default: {
    title: "",
    introduce: "",
    field: [], //이거 없음
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
        certificate_list: [],
      },
    ],
    link: "",
    file: "",
    thumbnail: "",
  },
});

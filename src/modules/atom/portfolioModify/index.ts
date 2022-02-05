import { atom } from "recoil";

export const container_list_modify_atom = atom<any>({
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
          certificate_list: [],
        },
      ],
      link: "",
      file: "",
      thumbnail: "",
    },
  });
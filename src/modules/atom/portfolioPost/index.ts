import { atom } from "recoil";
import { ContainerListType } from "../../../util/interface/portfolioPost/postType";

const RandomFunc = (num: number) => {
  var jbRandom = Math.random();
  return num + jbRandom;
};

interface BoxDataType {
  id?: number;
  box_title: string;
  box_content: string;
}

export const box_data = atom<BoxDataType[]>({
  key: "box_data",
  default: [{ id: RandomFunc(0), box_title: "", box_content: "" }],
});

export const container_text = atom<ContainerListType[]>({
  key: "container_text",
  default: [
    {
      id: RandomFunc(0),
      container_title: "",
      container_text_list: [
        {
          id: RandomFunc(0),
          box_title: "",
          box_content: "",
        },
      ],
    },
  ],
});

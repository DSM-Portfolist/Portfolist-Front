import { atom } from "recoil";
import { CertificateListType } from "../../../util/interface/portfolioPost/postType";

export const certificateListAtom = atom<CertificateListType[]>({
  key: "certificateListAtom",
  default: [
    {
      title: "",
      certificate_list: [""],
    },
  ],
});

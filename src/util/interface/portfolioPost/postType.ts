import { MoreInfoType } from "../portfolio/portfolioDetailType";

export interface PostType {
  user_id: number;
  name: string;
  profile_img: string;
  icon: string;
  title: string;
  introduce: string;
  field: number[];
  is_open: boolean;
  more_info: MoreInfoType[];
  container_list: ContainerListType[];
  certificate_container_list: CertificateListType[];
  link?: string;
}

export interface ContainerListType {
  id?: number;
  container_title: string;
  container_text_list: ContainerTextListType[];
  container_img_list: string[];
}

export interface ContainerTextListType {
  id?: number;
  box_title: string;
  box_content: string;
}

export interface CertificateListType {
  title: string;
  certificate_list: string[];
}

export interface BannderStateType {
  thumbnail: string;
  isClickBannder: boolean;
}

import { CommentType } from "./commentType";

export interface PortfolioType {
  default?: any;
  certificate: string[];
  comment_list: CommentType[];
  container_list: ContainerListType[];
  create_date: string;
  field: string[];
  file: string;
  icon: string;
  introduce: string;
  link: string;
  more_info_list: MoreInfoType[];
  name: string;
  profile_img: string | null;
  title: string;
  total_touching: number;
  touched: boolean;
  user_id: number;
}

//추가 정보 타입
export interface MoreInfoType {
  name: string;
  content: string;
}

export interface ContainerListType {
  map?: any;
  container_title: string;
  box_img: string[];
  box_list: BoxListType[];
}

export interface ContainerType {
  box_img: string[];
  box_list: BoxListType[];
}

export interface BoxListType {
  box_title: string;
  box_content: string;
}

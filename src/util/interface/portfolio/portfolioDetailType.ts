import { CommentType } from "./commentType";
import { UserType } from "../main/userType";

export interface PortfolioType {
  default?: any;
  user: UserType;
  create_date: string;
  touched: boolean;
  total_touching: number;
  icon: string;
  title: string;
  introduce: string;
  field: string[];
  more_info: MoreInfoType[];
  container_list: ContainerListType[];
  certificate: string[];
  link: string;
  file: string;
  comments: CommentType[];
}

//추가 정보 타입
export interface MoreInfoType {
  key: string;
  value: string;
}

export interface ContainerListType {
  map?: any;
  container_title: string;
  container: ContainerType[];
}

export interface ContainerType {
  box_img: string[];
  box_list: BoxListType[];
}

export interface BoxListType {
  box_title: string;
  box_content: string;
}

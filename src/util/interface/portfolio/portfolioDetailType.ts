import { UserType } from "../user/index";

export interface PortfolioType {
  default?: any;
  portfolio_id: number;
  certificate_container_list: CertificateContainerList[];
  container_list: ContainerListType[];
  create_date: string;
  field: string[];
  file: string;
  icon: string;
  introduce: string;
  is_mine: boolean;
  link: string;
  more_info_list: MoreInfoType[];
  title: string;
  total_touching: number;
  touched: boolean;
  user: UserType;
}

export interface CertificateContainerList {
  title: string;
  certificate_list: string[];
}

//추가 정보 타입
export interface MoreInfoType {
  name: string;
  content: string;
}

//컨테이너 리스트
export interface ContainerListType {
  map?: any;
  container_title: string;
  container_img_list: string[];
  container_text_list: ContainerTextType[];
}

export interface ContainerTextType {
  box_title: string;
  box_content: string;
}

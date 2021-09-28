import { CommentType } from "./commentType";
import { UserType } from "./portListType";

export interface PortfolioType {
  default?: any;
  user: UserType;
  touched: boolean;
  touching: number;
  icon: string;
  title: string;
  introduce: string;
  field: number[];
  more_info: MoreInfoType[];
  experience: ExperienceType[];
  project: ProjectType[];
  certificate: string[];
  link: string;
  file: string;
  comment: CommentType[];
}

//추가 정보 타입
export interface MoreInfoType {
  key: string;
  value: string;
}

// 경험 타입
export interface ExperienceType {
  exp_image: string;
  content: ExperienceContentType[];
}

// 경헙 컨텐츠 내용
export interface ExperienceContentType {
  exp_title: string;
  exp_content: string;
}

//프로젝트 타입
export interface ProjectType {
  pj_image: string;
  content: ProjectContentType[];
}

// 프토젝트 컨텐츠 타입
export interface ProjectContentType {
  pj_title: string;
  pj_content: string;
}

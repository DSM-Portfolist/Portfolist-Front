import { CommentType } from "./commentType";

export interface PortfolioType {
  id: number;
  user_id: number;
  touched: true;
  touching: number;
  icon: string;
  title: string;
  introduce: string;
  more_info: MoreInfoType[];
  experience: ExperienceType[];
  project: ProjectType[];
  certificate: [];
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

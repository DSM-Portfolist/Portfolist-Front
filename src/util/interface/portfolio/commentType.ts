import { UserType } from "../main/userType";

export interface CommentType {
  filter?: any;
  user: UserType;
  is_mine: boolean;
  comment_id: number;
  comment_content: string;
  c_date: string;
  re_comment: ReCommentType[];
}

export interface ReCommentType {
  user: UserType;
  is_mine: boolean;
  re_comment_id: number;
  re_comment_content: string;
  rc_date: string;
}
